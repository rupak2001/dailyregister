const express = require("express");
const nodemailer = require("nodemailer")
const app = express();
const port = process.env.PORT || 8000;
const model = require('./mongodb_files/model');
require('./mongodb_files/db');

app.use(express.json());

//create random numbers
const rand_num = ()=>{
    var authval = '';

    for(var i = 0;i<8;i++){
        authval += Math.floor((Math.random()*10)+1);
    }
    return authval
}


//total mail mechanism
const send_email = (email,authkey)=>{
    var Transport = nodemailer.createTransport({
        service: "Gmail",
        auth:{
            user:"rupsrb2001@gmail.com",
            pass:"rups1957"
        }
    });

    

    var mailOptions = {
        from: "noreply@checkmail.com",
        to: email,
        subject: "confirmation email",
        html: 'click <a href= http://localhost:8000/verify/'+email+'/'+authkey+'>here</a> to verify'
    }

    Transport.sendMail(mailOptions,(err,res)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("message sent");
        }
    })
}

var authkey = '';

app.get('/find_user/:email',async(req,res)=>{
    var find = await model.find({email:req.params.email}).select({email:1,_id:0});
    res.send(find);
})

app.post('/logup',async(req,res)=>{
    ini_mod = new model(req.body);
    authkey = rand_num();
    send_email(req.body.email,authkey);
    var run = await model.insertMany([ini_mod]);
    console.log(run);
    res.send(run);
})



app.get("/verify/:email/:code",async(req,res)=>{
    if(req.params.code == authkey){
        var run = await model.updateOne({email:req.params.email},{is_signedup:true})
        res.send("email varified :) please close this window and login")
        console.log(run);
    }
    else{
        res.send('user not found');
    }
});




app.get("/log_user/:email",async(req,res)=>{
    var run = await model.find({email:req.params.email}).select({email:1,password:1,_id:0});
    res.send(run);
})


app.listen(port,()=>{
    console.log('server connected at port',port);
});