const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

let UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minLength: 1,
    trim: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not valid.'
    }
  },
  password: {
    type: String,
    require: true,
    minLength: 6
  },
  tokens: [{
    access: {
      type: String,
      require: true
    },
    token:{
      type: String,
      require: true
    }
  }]
});

UserSchema.methods.toJSON = function(){
  let user = this;
  let userObject = user.toObject();
  //toObject() takes mongoose variable, user, and converts to regular object

  //only returns id and email. aka not password and token
  return _.pick(userObject, ['_id', 'email']);
};

UserSchema.methods.generateAuthToken = function(){
  let user = this;
  let access = 'auth';
  let token = jwt.sign({ _id: user._id.toHexString(), access }, 'secretvalue').toString();

  user.tokens = user.tokens.concat([{ access, token }]);

  return user.save().then(() => {
    return token;
  });
};

let User = mongoose.model('User', UserSchema);

module.exports = { User };
