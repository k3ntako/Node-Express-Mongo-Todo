const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

const id = '5c0c4390ed570ce2f08a213d';

if(ObjectID.isValid(id)){
  console.log('ID not valid')
};

Todo.find({
  _id: id
}).then((todos) =>{
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id
}).then((todo) =>{
  console.log('Todo find one', todo);
});

Todo.findById(id).then((todo) =>{
  if(!todo){
    return console.log("Todo not found");
  };
  console.log('Todo by id', todo);
}).catch((e) => console.log(e));

User.findById('5c0c7d40cd58adeb2fc2c25e').then((user) =>{
  if(!user){
    return console.log("User not found");
  };
  console.log('User by id', user);
}).catch((e) => console.log(e));
