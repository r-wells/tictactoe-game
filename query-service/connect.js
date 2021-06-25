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

async function getLeaderboardData(client) {
    const res = await client.db("tic_tac_toe").collection("leaderboard").find({}).toArray();

    if (res) {
        return { success: true, leaders: res };
    } else {
        return { success: false, leader: null };
    }
}

async function getPastGamesByUsername(client, username) {
    const res = await client.db("tic_tac_toe").collection("user_past_games").findOne({ username: username });

    if (res) {
        return { success: true, userPastGames: res };
    } else {
        console.error(res);
        return { success: false, games: null };
    }
}

async function saveUserGame(client, username, gameData) {
    const filter = { username: username };
    const updateDoc = {
        $push: {
            past_games: gameData
        }
    };
    const res = await client.db("tic_tac_toe").collection("user_past_games").updateOne(filter, updateDoc);

    if (res) {
        return { success: true, message: 'successfully updated user past games' };
    } else {
        console.error(res);
        return { success: false, message: "Failed to update" };
    }
}

module.exports = {
    findUserByNameOrEmail,
    createUser,
    getLeaderboardData,
    getPastGamesByUsername,
    saveUserGame
}