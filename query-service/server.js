const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const { findUserByNameOrEmail, createUser } = require('./connect');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const mongoClientURI = "mongodb+srv://caesar:EtTuBrute@cluster0.5nrmy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'POST, GET');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/get-user', async (req, res) => {
    const client = new MongoClient(mongoClientURI, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        const userRes = await findUserByNameOrEmail(client, req.body.username);

        if (userRes.success) {
            res.send(userRes);
        } else {
            res.send({ success: false, message: "User not found" });
        }
    } catch (e) {
        console.log(e);
    } finally {
        client.close();
    }
});

app.post('/create-user', async (req, res) => {
    const client = new MongoClient(mongoClientURI, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        // console.log('req', req);
        await client.connect();
        const data = { username: req.body.username, email: req.body.email, hashed_password: req.body.hashed_password };
        const userRes = await createUser(client, data);

        if (userRes.success) {
            res.send(userRes);
        } else {
            res.send({ success: false, message: "Error creating the user" });
        }
    } catch (e) {
        console.log(e);
    } finally {
        client.close();
    }
});


app.listen(8081, () => {
    console.log('running on port 8081')
});