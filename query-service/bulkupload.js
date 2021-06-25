const { MongoClient } = require('mongodb');
const dotenv = require("dotenv");

dotenv.config();

async function init() {
    const mongoClientURI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.5nrmy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
    const client = new MongoClient(mongoClientURI, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();

        const data = {
            username: 'r-wells',
            past_games: [
                { opponent: 'sandra-bullock', date: '06/20/2021', result: 'won' },
                { opponent: 'steveeeee', date: '06/16/2021', result: 'won' },
                { opponent: 'steveeeee', date: '06/12/2021', result: 'lost' },
                { opponent: 'doug-stamper', date: '06/05/2021', result: 'lost' },
                { opponent: 'don_draper', date: '06/03/2021', result: 'won' },
                { opponent: 'sf_rules', date: '05/18/2021', result: 'won' },
                { opponent: 'country-musicfan', date: '05/16/2021', result: 'won' },
                { opponent: 'don_draper', date: '04/26/2021', result: 'won' },
                { opponent: 'don_draper', date: '04/15/2021', result: 'won' },
                { opponent: 'rodney-odoul', date: '04/10/2021', result: 'lost' },
                { opponent: 'don_draper', date: '03/22/2021', result: 'won' },
                { opponent: 'farmerdan', date: '03/12/2021', result: 'won' },
                { opponent: 'bigcity-living', date: '02/26/2021', result: 'won' },
                { opponent: 'foodie', date: '02/10/2021', result: 'won' },
                { opponent: 'kitty-kat', date: '02/05/2021', result: 'won' },
                { opponent: 'chihuaha', date: '02/03/2021', result: 'won' },
                { opponent: 'gamers63', date: '02/02/2021', result: 'won' },
                { opponent: 'markymark25', date: '01/26/2021', result: 'won' },
                { opponent: 'don_draper', date: '01/25/2021', result: 'won' },
                { opponent: 'chihuaha', date: '01/23/2021', result: 'won' },
            ]
        };

        await insertOneToPastGames(client, data);

    } catch (e) {
        console.log(e);
    } finally {
        client.close();
    };
}

async function insertManyToLeaderboard(client, leaders) {
    const res = await client.db("tic_tac_toe").collection("leaderboard").insertMany(leaders);

    if (res) {
        console.log('Success!', res);
    } else {
        console.error('There was an error');
    }
}

async function insertOneToPastGames(client, item) {
    const res = await client.db("tic_tac_toe").collection("user_past_games").insertOne(item);

    if (res) {
        console.log('Success!', res);
    } else {
        console.error('There was an error');
    }
}

init().catch(console.error);