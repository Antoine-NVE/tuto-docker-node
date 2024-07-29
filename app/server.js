const express = require('express');
const db = require('./db');
const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
    try {
        const clients = await db.query('SELECT * FROM clients');
        res.status(200).send(clients.rows);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
    res.send('Bonjour');
});

app.get('/create', async (req, res) => {
    try {
        const client = await db.query('CREATE TABLE clients(id SERIAL PRIMARY KEY, name VARCHAR(100), firstname VARCHAR(100))');
        res.status(200).send({ message: 'Table créée' });
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.get('/add', async (req, res) => {
    try {
        const numero = Math.floor(Math.random() * 100 - 1);
        const client = await db.query(`INSERT INTO clients(name, firstname) VALUES ('nom${numero}', 'prenom${numero}')`);
        res.status(200).send({ message: 'Client créé' });
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.listen(PORT, HOST, () => {
    console.log('Éxécution sur le port ' + PORT);
});
