const MongoClient = require('mongodb').MongoClient;

let db;

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    console.log(err);
  } else {
    db = client.db();
    console.log('Connected to MongoDB');
  }
});

module.exports = db;
