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

app.post('/login',async(req,res)=>{
    ini_mod = new model(req.body);
    authkey = rand_num();
    console.log(authkey);
    send_email(req.body.email,authkey);
    var run = await model.insertMany([ini_mod]);
    console.log(run);
    res.send(run);
})



app.get("/verify/:email/:code",async(req,res)=>{
    if(req.params.code == authkey){
        var run = await model.updateOne({email:req.params.email},{is_signedup:true})
        res.redirect('/') //needed to change acc to frontend
    }
    else{
        res.send('user not found');
    }
});


app.listen(port,()=>{
    console.log('server connected at port',port);
});