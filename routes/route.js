// const express = require('express')
// const router = express.Router();


// 13. To send dynamic data to HTML with Nodejs we use PUG template Engine
//       --> Create a directory named "views" having file named "index.pug"
//       --> Write HTML in ".pug" form
//       --> app.set('view engine','pug') in  main file
//       --> use "render("file name",{dynamic data})"

// router.get("/",(req,res)=>{
//    console.log(__dirname);
//    res.render("index.pug",{name:"Aditya"})
// });

// router.get("/book",(req,res)=>{
//    res.send(`Hii All books ! `)
// })

// router.post("/book",(req,res)=>{
//    res.json({ data : "book stored"})
// })

// router.get("/book/:id",(req,res)=>{
//    res.send(`Hii User book ${req.params.id} is book id !`)
// })


// 14. MongoDB
/*
const { ObjectId } = require('bson');
const express = require('express');
const router = express.Router();
const connection = require("./database/db")

//Getting Book from MongoDB
// router.get("/",async (req,res)=>{
//    const db = await connection();
//    const allBooks =await db.collection("book").find().toArray(); 
//    //console.log(allBooks);
//    res.json(allBooks);
// })

// Adding a book to MongoDB
router.post("/",async(req,res)=>{
   const db = await connection();
   const data = {
      title: 'Atomic Habits',
      author: 'James'
   }
   await db.collection('book').insertOne(data);
   res.send(`Hii User book added !`)
})

//CREATE :- insert book
router.post("/book",async(req,res)=>{
   const db = await connection();
   await db.collection('book').insertOne(req.body);
   res.status(201).send(`Book Add ${JSON.stringify(req.body)}`);
});
 

//READ :- get by id
router.get("/:id",async(req,res)=>{
   const db = await connection();
   const id = req.params.id;
   const book = await db.collection('book').find({_id : ObjectId(id)}).toArray();
   res.json(book)
});

//UPDATE :- Updating a book
router.patch("/:id",async(req,res)=>{
   const db = await connection();
   const id = req.params.id;
   await db.collection('book').updateOne({_id : ObjectId(id)},{$set :req.body})
   res.send(`Book Updated !`)
});

//DELETE :- Deleting book
router.delete("/:id",async(req,res)=>{
   const db = await connection();
   const id = req.params.id;
   db.collection('book').deleteOne({_id : ObjectId(id)});
   res.status(204).send(`Book Deleted`)
});
*/


const BookController = require("../controllers/bookController")
const express = require('express');
const authMiddleware = require("../middleware/authMiddlerware");
const router = express.Router();

router
      .use(authMiddleware)
      .route("/")
      .get(BookController.fetch)
      .post(BookController.store)

router.route("/:id")
      .get(BookController.fetchByID)
      .patch(BookController.updateByID)
      .delete(BookController.removeByID)


module.exports = router;








