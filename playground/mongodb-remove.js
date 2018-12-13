const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result) => {
  console.log(result);
})

Todo.findOneAndRemove({});
Todo.findByIdAndRemove('5c0c8dd9f26bc42aa9c7d45b');
