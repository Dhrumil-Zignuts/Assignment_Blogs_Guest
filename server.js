const express = require('express');
const dbConnect = require('./dbConnect')
const path = require('path')

// Creating App
app = express()

// Middleware
app.use(express.json());
app.use(express.urlencoded());

// use Static Files
app.use('/public',express.static('./public'));

// Set a view JS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// require router
const blogs = require('./routes/blogRoutes')

// Default route 
app.use('/blogs', blogs)


app.get('/', (req,res)=>{
    res.render('index');
})

// Listning App
app.listen(5000, dbConnect)