const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
let nodemailer = require('nodemailer');
mongoose.connect('mongodb://localhost:27017/newdb', {useNewUrlParser: true,useUnifiedTopology:true});
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
const DataTable = mongoose.model('DataTable', {
    name: String,
    email: String,
    password: String,
   });
   var PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('application running on the localhost:3000');
});
app.post('/register', async (req, res) => { 
  try{
  const body = req.body;
  console.log('req.body', body);
  const email = body.email;
    const result = await DataTable.findOne({"email":  email});
    if(!result) // this means result is null
    {
   const student = new DataTable(body);
   const result = await student.save(); 
   res.send({ message: 'Student signup successful!!'});
    }
    else{

  var myquery = { email: 'email' };
  dbo.collection("DataTable").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });

    }
    //else{
      //res.status(401).send({
        //Error: 'User Already exist'
       //});
    //}
  }
  catch(ex){
    console.log('ex',ex)
  } 
  });
  app.post('/login',  async (req, res) => { 
    const body = req.body;
    console.log('req.body', body);

    const email = body.email;

    // lets check if email exists 

    const result = await DataTable.findOne({"email":  email});
    if(!result) // this means result is null
    {
      res.status(401).send({
        Error: 'This user doesnot exists. Please signup first'
       });
    }
    else{
      // email did exist 
      // so lets match password 

      if(body.password === result.password){

        // great, allow this user access 

        console.log('match');
        

        res.send({message: 'Successfully Logged in the system!'});
      }

        else{

          console.log('password doesnot match try again!');

          res.status(401).send({message: 'Wrong email or Password'});
        }
    }
  });
    app.post('/sendmail', async (req, res) => {
    try {
    const body = req.body;
    let pass = "";
    console.log('req.body', body);
    const email = body.email;
    const result = await DataTable.findOne({"email":  email});
    if(!result) // this means result is null
    {
      res.status(401).send({
        Error: 'This user doesnot exists. Please signup first'
       }); 
    }
    else {
        pass = result.password;
      console.log(pass);
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bestscholorship@gmail.com',
      pass: 'proj'
    }
  });
  var mailOptions = {
    from: 'bestscholorship@gmail.com',
    to: email,
    subject: 'Password Recovery best-scholorship',
    html: `<h1>Hello</h1><p>Thanks a lot for using best-scholorship, your password is: ${pass} </p> <h2>regards:</h2> <p>best-scholorship</p>`
  };
  transporter.sendMail(mailOptions, function(error, info){
    
    if (error) {
      console.log(error);
      res.send({message: 'we got a problem'});
    } else {
      console.log('Email sent: ' + info.response);
      res.send({message: 'succefull!'});
    }
  });
}
}
  catch(ex){
    console.log('ex',ex)
  }
  });
app.get('/',  function (req, res) {
  res.status(200).send({
    message: 'Express server'});
});
