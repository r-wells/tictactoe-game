const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const app = express();

const users = [];

app.use(cors());
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'POST, GET');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/login', async (req, res) => {
    const user = users.find(u => {
        return u.username === req.body.username || u.email === req.body.username;
    });
    if (!user) {
        res.send({
            success: false, message: 'User not found. Please try again'
        });
        return;
    }
    console.log('user', user);
    const match = await bcrypt.compare(req.body.password, user.password);
    console.log('match', match);
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
});

app.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = {
            id: Date.now().toString(),
            username: req.body.name,
            email: req.body.email,
            password: hashedPassword
        };
        users.push(newUser);
        console.log('users', users);
        res.send({
            message: "Successfully registered user"
        });
    } catch (e) {
        res.send({ message: `Failed to register user ${e.message}` });
    }
});


app.listen(8080, () => console.log('Listening on 8080'));