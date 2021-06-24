const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const axios = require('axios');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'POST, GET');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/login', async (req, res) => {
    const user = await axios.post('http://localhost:8081/get-user', {
        username: req.body.username
    });
    if (!user.data.success) {
        res.send(user.data);
    } else {
        const match = await bcrypt.compare(req.body.password, user.data.user.hashed_password);
        if (match) {
            res.send({
                success: true,
                token: '123'
            });
        } else {
            res.send({
                success: false, message: 'wrong password'
            });
        }
    }
});

app.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = {
            username: req.body.username,
            email: req.body.email,
            hashed_password: hashedPassword
        };
        const createdUser = await axios.post('http://localhost:8081/create-user', newUser);
        res.send({
            message: "Successfully registered user", createdUser
        });
    } catch (e) {
        res.send({ message: `Failed to register user ${e.message}` });
    }
});


app.listen(8080, () => console.log('Listening on 8080'));