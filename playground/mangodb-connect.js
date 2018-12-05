const {MongoClient, ObjectID} = require('mongodb');
let obj = new ObjectID ();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log("Unable to connect to MongoDB server.");
  }
  console.log("Successfully connected to MongoDB server.");
  const db = client.db('TodoApp');



  client.close();
});
