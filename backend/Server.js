require('dotenv').config();
const express = require('express');
const app = express();

//default middleware
app.use(express.json());
app.use((req, res, next)=>{

    console.log(req.path, req.method);
    next();
})

app.get('/', (req, res)=>{

    res.json({msg:'Hello your app is working again'})
})

app.listen(process.env.PORT, ()=>{

    console.log('Connected to DB, ports no:', process.env.PORT);
})

