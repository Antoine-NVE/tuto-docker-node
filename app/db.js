const { Pool } = require('pg');

const db = new Pool({
    host: 'postgres',
    port: 5432,
    user: 'dbuser',
    password: 'dbpass',
    database: 'demodb',
});

module.exports = db;
