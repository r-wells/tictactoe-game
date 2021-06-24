async function findListingByName(client, name) {
    const res = await client.db("sample_airbnb").collection("listingsAndReviews").findOne({ name: name });

    if (res) {
        console.log(`Listing found for ${name}`);
        console.log(res);
    } else {
        console.log('No results found');
    }
}

async function updateListingByName(client, name, updatedListing) {
    const res = await client.db("sample_airbnb").collection("listingsAndReviews").updateOne({ name: name }, { $set: updatedListing });

    if (res) {
        console.log(`Updated listing for ${name}`);
        console.log(res);
    } else {
        console.log('No results found');
    }
}

async function upsertListingByName(client, name, updatedListing) {
    const res = await client.db("sample_airbnb").collection("listingsAndReviews").updateOne({ name: name }, { $set: updatedListing }, { upsert: true });

    console.log(`${res.matchedCount} document(s) matched the criteria`);

    if (res.upsertedCount > 0) {
        console.log(`One document was inserted with id ${res.upsertedId}`);
    } else {
        console.log(`${res.modifiedCount} number of documents were updated`);
    }
}

async function deleteListingByName(client, name) {
    const res = await client.db("sample_airbnb").collection("listingsAndReviews").deleteOne({ name: name });

    console.log(`${res.deletedCount} documents were deleted`);

}

async function createUser(client, newListing) {
    console.log('newListing', newListing);
    const res = await client.db("tic_tac_toe").collection("users").insertOne(newListing);
    if (res) {
        return { success: true, userId: res.insertedId };
    } else {
        return { success: false, user: null };
    }
}

async function findUserByNameOrEmail(client, username) {
    let res = await client.db("tic_tac_toe").collection("users").findOne({ username: username });

    if (res) {
        return { success: true, user: res };
    } else {
        let res = await client.db("tic_tac_toe").collection("users").findOne({ email: username });
        if (res) {
            return { success: true, user: res };
        } else {
            return { success: false, user: null };
        }
    }
}

module.exports = {
    findUserByNameOrEmail,
    createUser
}