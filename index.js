const express = require('express');


const app = express();
// app.use(express.json()); // for parsing json bodies


app.get('/', (req,res)=>{
    res.send("Server is running...");
});

app.post('/create', (req,res)=>{
    console.log(req.body);
    res.send('created taks.');
})


app.listen(4000, ()=> console.log('server is running at port 4000'));