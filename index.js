const express = require('express');
const helper = require('./api/hashHelpers');
const bcrypt = require('bcryptjs');

const server = express();

server.use(express.json());

const port = 5000;

//Some bcrypt voodoo inside





//an api called users. When we query it, it returns all the users in the db we created


server.get('/', (req, res) => {
    res.status(200).send('<img src="https://media.giphy.com/media/d3Kq5w84bzlBLVDO/giphy.gif" alt="it\'s alive"/>')
});

server.get('/api/users', (req, res) => {
    helper.getAllData()
        .then(data => {
        res.send(data)
    });
});
server.post('/api/users', (req, res) => {
const credentials = req.body;
const hash = bcrypt.hashSync(credentials.password, 14)
    helper.add(credentials)
    .then(data => {
        if (!data && !bcrypt.compareSync(hash, credentials.password) {
            return res.status(401).json({message: "Failed to authenticate"})
        });

})


server.listen(port, () => console.log(`Listening on ${port}!`));