const {MongoClient, ObjectID} = require('mongodb');
let obj = new ObjectID ();
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log("Unable to connect to MongoDB server.");
  }
  console.log("Successfully connected to MongoDB server.");
  const db = client.db('TodoApp');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5c0439a2175ced1a90cb4b5e')
  // }).toArray().then((docs) => {
  //   console.log('Todos')
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log("Unable to fetch todos.");
  // })

  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`)
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log("Unable to fetch todos.");
  })

  // client.close();
});
