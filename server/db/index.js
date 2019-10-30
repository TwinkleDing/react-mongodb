const mongoose = require('mongoose');
const db = mongoose.connect("mongodb://localhost:27017/test", {useNewUrlParser:true}, function(err){
  if(err){
    console.log(err)
  }else{
    console.log("Connection success!")
  }
})
const Schema = mongoose.Schema; 

const userSchema = require('./user')
const commentSchema = require('./comment')



// 验证码
let checkcodeSchema = new Schema({
  token: String,
  code: String
})

exports.User = mongoose.model('User', userSchema); 
exports.Comment = mongoose.model('Comment', commentSchema); 
exports.Checkcode = mongoose.model('Checkcode', checkcodeSchema);