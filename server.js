// function add(a,b){
//     return a+b;
// }

// var add= function(a,b){
//     return a+b;
// }


// var add = (a,b) =>{
//     return a+b;
// }

// var add = (a,b) => a+b;

// var result = add(2,7);
// console.log(result);


// (function(){
//     console.log('prince is added')
// })()


/*function callback(){
    console.log("prince is a student")
}

const add = function(a,b,callback){
    var result = a+b
    console.log('result :' +result)
    callback()
}

add(3,5,callback)  */



/* const add = function(a,b,prince){
    var result = a+b
    console.log('result :' +result)
    prince()
}

add(5,4,() => console.log('add completed'))  */



// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile('greeting.txt', 'Hi' + user.username + '!\n', ()=>{
//     console.log('file is created');
// });

// console.log(fs);




  /* const notes = require('./notes.js');
var _ = require('lodash')


console.log('server file is available');
var age = notes.age;
var result = notes.addNumber(age+18,10)
console.log(age)
console.log('result is :' +result)

var data =  ["person", "person", 1,2,1,2,"name", "age",'2']
var filter = _.uniq(data);
console.log(filter)  */


const express = require('express')
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // req.body




app.get('/', (req, res) => {
  res.send('Welcome to our Hotel')
})




// Import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

// Use the routers
app.use('/person' , personRoutes);
app.use('/menu' , menuItemRoutes);

app.listen(3000,()=>{
    console.log('listening on port 3000');
})

