
// Mongo Atlas Connection

require('dotenv').config();
const mongoose = require('mongoose');

// Mongo URL and its Connection
const mongoURI = process.env.DATABASE_URL;
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI);

db.on('error', (err) => console.log(err.message + ' is Mongosh not running?'));
db.on('connected', () => console.log('mongo connected at: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

// Open Connection
db.on('open', () => {
	console.log('✅ mongo connection made!');
});

module.exports = mongoose;