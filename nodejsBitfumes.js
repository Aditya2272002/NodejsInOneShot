// const http = require('http')

// 1. creating server
// const server = http.createServer((req,res) =>{
//    res.writeHead(200,{"Content-Type":"application.json"});
//    res.end(JSON.stringify({data:"Hello Aditya"}));
// });
// server.listen(4000);



//2. Why we use npm ? --> It is the library that enable us to use different library in my Nodejs app.

//3. HTTP Handling routes
// const server2 = http.createServer((req,res)=>{
//    if(req.url === '/'){
//       res.writeHead(200,{"Content-Type":"application.json"});
//       res.end(JSON.stringify({data:"Hello from main page"}));
//    }else if(req.url === '/about'){
//       res.writeHead(200,{"Content-Type":"application.json"});
//       res.end(JSON.stringify({data:"Hello from about page"}));
//    }else{
//       res.writeHead(404,{"Content-Type":"text/html"});
//       res.write('<h1>Page Not Found!</h1>')
//       res.end();
//    }
// })
// server2.listen(3000);

//4. Serving a file as response to API hit
// const fs = require('fs')
// const server3 = http.createServer((req,res)=>{
//    res.writeHead(404,{"Content-Type":"text/html"});
//    fs.readFile("./pages/home.html","utf-8",(err,data)=>{
//       if(err) throw err;
//       res.write(data);
//       res.end();
//    })   
// })
// server3.listen(3000);

// 5. Event Loop
/*
Nodejs is asynchronous and non-blocking I/O, runs on single thread, one thing happening at a time.
Event loop continuously checks the call stack to see if there's any function that needs to run
Call stack is the stack of process that the application is running.
process.nextTick() --> Function that will execute once call stack is empty.
Priority List for Nodejs -> mini tasks, micro tasks(like promises), macro tasks (like setTimeout)

*/

// 6. Using Express --> It is very easy with this to handle multiple routes with Express.


// 7. Event Emmiter --> Suppose i want to do DB transaction on specific task oe event then we use this

// const EventEmitter = require("events")
// const myEvent = new EventEmitter();

// myEvent.on("DB-event",(data)=>{
//    console.log(`Doing DB transactions!`);
//    console.log(data);
// })

// const express = require('express')
// const app  = express();
// const PORT = 3000;

// app.get("/",(req,res)=>{
//    res.send("Hello from express!")
// })

// app.post("/",(req,res)=>{
//    res.json({ data : "Hii from POST method!"})
// })

// //Handle all routes of not found above
// app.all("/*",(req,res)=>{
//    res.send("Page Not Found !");
// })

// app.listen(PORT,(req,res)=>{
//    console.log(`Server is running http://localhost:${PORT}`);
// })


// 9. Dynamic Routing
// const express = require('express')
// const app  = express();
// const PORT = 3000;

// app.get("/",(req,res)=>{
//    res.send("Hello User!")
// });

// // Merging routes
// app.get("/book",(req,res)=>{
//    res.send(`Hii All books ! `)
// })

// app.post("/book",(req,res)=>{
//    res.json({ data : "book stored"})
// })

// app.route("/book")
//    .get((req,res)=>{res.send(`Hii All books ! `)})
//    .post((req,res)=>{res.json({ data : "book stored"})})



// //Dynamic params accepting
// app.get("/book/:id",(req,res)=>{
//    res.send(`Hii User book ${req.params.id} is book id !`)
// })

// app.listen(PORT,(req,res)=>{
//    console.log(`Server is running http://localhost:${PORT}`);
// });



// 11. Routes should be in another file :- So we use Router();

// const express = require('express')
// const app  = express();
// const PORT = 3000;

// app.set('view engine', 'pug')

// const routes = require("./routes")
// app.use(routes);

// app.listen(PORT,(req,res)=>{
//    console.log(`Server is running http://localhost:${PORT}`);
// });


// 13. Pug template Engine


//14. MongoDB 

/*
const express = require('express')
const app  = express();
const PORT = 3000;
// npm i body-parser
const bodyParser = require('body-parser')

const routes = require("./routes")

app.use(bodyParser.json());
app.use(routes);


app.listen(PORT,(req,res)=>{
   console.log(`Server is running http://localhost:${PORT}`);
});
*/

//15. Mongoose

const express = require('express')
const app  = express();
const PORT = 3000;
const mongoose = require('mongoose');

const bodyParser = require('body-parser')
const routes = require("./routes/route")
const authRouter = require("./routes/auth")
const connection = require("./database/db")

app.use(bodyParser.json());
app.use(routes);
app.use("/auth",authRouter); 

// mongoose.connect('mongodb://127.0.0.1/nodejs-book-db').then(()=>{
//    app.listen(PORT,(req,res)=>{
//       console.log(`Server is running http://localhost:${PORT}`);
//    });
// })

connection().then(()=>{
   app.listen(PORT,(req,res)=>{
      console.log(`Server is running http://localhost:${PORT}`);
   });
})