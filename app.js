require('dotenv').config();
const express=require("express");
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
const app=express();
const port=process.env.port || 3000;





//middleware to parse json bodies 
app.use(express.json());

//database connection
connectDB();

// api routes
app.use('/api/user', userRoutes);
app.use('/api/task', taskRoutes);

// basic get request on root path or ye batata hai  api chal rhi hai 
app.get('/',(req,res)=>{
    res.send('Task Manager API is running');
});



//server start
app.listen(port,()=>{
    console.log(`Server running pn port ${port}`);
});

