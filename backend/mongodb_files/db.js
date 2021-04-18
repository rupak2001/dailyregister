const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/reg_eg}',{useCreateIndex:true,
useNewUrlParser:true,useUnifiedTopology:true})
.then(console.log('db connected'))