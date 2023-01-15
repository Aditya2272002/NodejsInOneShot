/*
//npm i mongodb
const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'nodejs-book-db';

async function connection(){
   // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = await client.db(dbName);
  return db;
}

module.exports = connection;
*/

//Mongoose
const mongoose = require('mongoose');

async function connection(){
  //await mongoose.connect('mongodb://127.0.0.1/my_database');
  await mongoose.connect('mongodb://127.0.0.1/nodejs-book-db');
}


module.exports = connection;