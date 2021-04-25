const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:rups1957@eg1.5ifzv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useCreateIndex:true,
useNewUrlParser:true,useUnifiedTopology:true})
.then(console.log('db connected'))