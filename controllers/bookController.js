// const { ObjectId } = require("mongodb");
// const connection = require("../database/db")
/*
class Control{
   fetch = async (req,res)=>{
      const db = await connection();
      const books =await db.collection("book").find().toArray(); 
      res.json(books);
   }
   
   store = async(req,res)=>{
      const db = await connection();
      await db.collection('book').insertOne(req.body);
      res.status(201).send(`Book Add ${JSON.stringify(req.body)}`);
   }

   fetchByID = async(req,res)=>{
      const db = await connection();
      const id = req.params.id;
      const book = await db.collection('book').find({_id : ObjectId(id)}).toArray();
      res.json(book)
   }

   updateByID = async(req,res)=>{
      const db = await connection();
      const id = req.params.id;
      await db.collection('book').updateOne({_id : ObjectId(id)},{$set :req.body})
      res.send(`Book Updated !`)
   }

   removeByID = async(req,res)=>{
      const db = await connection();
      const id = req.params.id;
      db.collection('book').deleteOne({_id : ObjectId(id)});
      res.status(204).send(`Book Deleted`)
   }

}


module.exports = new Control();
*/
//15. Mongoose
const { ObjectId } = require("mongodb");
const Book = require("../models/Book");

exports.fetch = async (req,res)=>{
   const books = await Book.find(); 
   res.json(books);
}

exports.store = async(req,res)=>{
   try{
      await Book.create(req.body);
      res.status(201).send(`Book Added\n ${JSON.stringify(req.body)}`);
   }catch(error){
      res.json(error);
   }
}

exports.fetchByID = async(req,res)=>{
   const _id = ObjectId(req.params.id);
   const book = await Book.find({_id});
   res.json(book)
}
exports.updateByID = async(req,res)=>{
   const _id = ObjectId(req.params.id);
   await Book.updateOne({_id},{$set :req.body})
   res.send(`Book Updated !`)
}

exports.removeByID = async(req,res)=>{
   const _id = ObjectId(req.params.id);
   await Book.deleteOne({_id});
   res.status(204).send(`Book Deleted`)
}

