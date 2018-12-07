const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log("Unable to connect to MongoDB server.");
  }
  const db = client.db('TodoApp');

  db.collection('Todos').findOneAndUpdate(
    { text: 'Something to do' }, //filter
    { $set: { completed: true } }, //update
    { returnOriginal: false } //options
  ).then((result) => {
    console.log(result);
  })

  db.collection('Users').findOneAndUpdate(
    { _id: new ObjectID("5c043ae3825f311bc1e66e20") }, //filter
    { $inc: { age: 1 } }, //update
    { returnOriginal: false } //options
  ).then((result) => {
    console.log(result);
  })

  // client.close();
});
