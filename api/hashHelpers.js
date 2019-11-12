const db = require('../data/dbConfig');

module.exports = {
    getAllData,
    add,
}

function getAllData() {
    return db('login');
};

function add(data) {
    return db('login')
    .insert(data);
}