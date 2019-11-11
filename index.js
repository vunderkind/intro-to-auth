const express = require('express');

const server = express();

server.use(express.json());

const port = 5000;

server.get('/', (req, res) => {
    res.status(200).send('<img src="https://media.giphy.com/media/d3Kq5w84bzlBLVDO/giphy.gif" alt="it\'s alive"/>')
});

server.listen(port, ()=> console.log(`Listening on ${port}!`));