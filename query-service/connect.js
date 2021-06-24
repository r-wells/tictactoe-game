// async function init() {

//     const uri = "mongodb+srv://caesar:EtTuBrute@cluster0.5nrmy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//     const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//     try {
//         await client.connect();

//         // await createListing(client, {
//         //     name: "Lovely place",
//         //     summary: "Best loft ever",
//         //     bedrooms: 1,
//         //     bathrooms: 1
//         // });

//         // await findListingByName(client, "John Cena");
//         await upsertListingByName(client, "Lovely place", {
//             bedrooms: 2, beds: 8
//         });
//         await upsertListingByName(client, "John Cena", {
//             bedrooms: 2, beds: 8
//         });
//         await deleteListingByName(client, "John Cena");
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }

async function listDB(client) {
    const dbList = await client.db().admin().listDatabases();
    console.log('DB:');
    dbList.databases.forEach(db => {
        console.log(db.name);
    })
}

async function createListing(client, newListing) {
    const res = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);

    console.log(`New listing: ${res.insertedId}`);
}

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

// async function run() {
//     const mongoClientURI = "mongodb+srv://caesar:EtTuBrute@cluster0.5nrmy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//     const client = new MongoClient(mongoClientURI, { useNewUrlParser: true, useUnifiedTopology: true });
//     try {
//         await client.connect();
//         const user = await findUserByNameOrEmail(client, "r.l.wells@outlook.com", "r.l.wells@outlook.com", "$2b$10$Y1rDQPTewHSDnpjYq4xSPubOQ7Vk61uwDOfMn.Sq7EmTFEALipemC");
//         console.log('user', user);
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }
// run();

// init().catch(console.error);