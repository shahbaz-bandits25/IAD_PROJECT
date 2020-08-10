const express = require('express')
const app = express();

const bodyparer = require('body-parser');
const cookieParser = require('cookie-parser')
const cors = require('cors')


const HotelsRoute = require('./routes/route')

//middlewares
app.use(bodyparer.json())
app.use(cookieParser());
app.use(cors())

//routes
app.use('/', HotelsRoute)


const port = 8080
app.listen(port, ()=>{
    console.log("Node is listning at http://localhost:8080")
});