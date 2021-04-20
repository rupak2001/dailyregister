const mongoose = require('mongoose')
const validator = require('validator')

const sc = mongoose.Schema({
    "name":{type:String},
    "email":{type:String,
    unique:[true,'this email already exists'],
    validate(val){
        if(!validator.isEmail){
            throw new error('not a valid email');
        }
    }
    },
    "phone_no":{type:Number,maxlength:12,minlength:10,unique:[true,'this no. already exists']},
    "password":{type:String,unique:[true,"password already taken"]},
    "is_signedup" : {type:Boolean,default:false},
})

const reg_info = new mongoose.model("req_info",sc);

module.exports = reg_info;