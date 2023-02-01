const express = require('express');
const dbConnect = require('./dbConnect')
const path = require('path')

app = express()


app.use(express.json());
app.use(express.urlencoded());

// use Static Files
app.use('/public',express.static('./public'));

// Set a view JS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));


const blogs = require('./routes/blogRoutes')

app.use('/blogs', blogs)

app.get('/', (req,res)=>{
    res.render('index');
})


app.listen(5000, dbConnect)