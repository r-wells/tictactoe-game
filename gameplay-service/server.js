const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const onlineUsers = [];

app.post('/connect', async (req, res) => {

});

app.post('/disconnect', async (req, res) => {

});

app.listen(8082, () => console.log('Listening on port 8082'));