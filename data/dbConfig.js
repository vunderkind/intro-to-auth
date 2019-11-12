const knex = require('knex');

const config = require('../knexfile.js');

const db = knex(config.development);

// export for use in codebase
module.exports = db;