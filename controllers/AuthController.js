const User = require("../models/User")
const bcrypt = require("bcrypt")
const saltRounds = 10;


exports.getAllRegisterdUser = async(req,res)=>{
   const users = await User.find();
   res.json({users}); 
}

exports.signUp = async(req,res)=>{
   const password = await bcrypt.hash(req.body.password, saltRounds);
   const data = {...req.body,password};//
   const user = await User.create(data);
   res.json({user})
}

var jwt = require('jsonwebtoken');
exports.login = async(req,res)=>{
   const user = await User.findOne({email: req.body.email});
   if(!user){
      res.status(404).json({error:"User Not Found !"});
      return;
   }
   else if(! await bcrypt.compare(req.body.password, user.password)){
      res.status(401).json('Incorrect Password !');
      return;
   }

   const token = await jwt.sign({user},'fake-jwt-secret');
   res.status(400).json({user,access_token:token});

}


