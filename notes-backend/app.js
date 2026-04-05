const express = require('express')
const connectDB = require('./config/db');
require('dotenv').config();
const noteRoutes = require('./routes/noteRoutes');

connectDB();
const app = express()
app.use(express.json())


app.get('/',(req,res)=>{
    res.status(200).json({message:"Working"})
})

app.use('/api', noteRoutes);

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})