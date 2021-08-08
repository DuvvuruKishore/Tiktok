import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import db from './dbconnect.js';
import Crud from './Schema.js';

db;
const app=express();
const port=process.env.PORT||5000;

app.use(express.json());
app.use(cors());


app.get('/',(req,res)=>{
    res.send("hello world")
})

app.get('/get',(req,res)=>{
    Crud.find((err,data)=>{
        if(err){
            res.status(400).send(err);
        }else{
            res.status(200).send(data);
        }
    })
})

app.post('/post',(req,res)=>{
    const value=req.body;
    Crud.create(value,(err,data)=>{
        if(err){
            res.status(400).send(err);
        }else{
            res.status(200).send(data);
        }
    })
})
app.put('/update',async(req,res)=>{
   const newName=req.body.newname;
    const id=req.body.id;

    try{
     await Crud.findById(id,(err,updateName)=>{
         updateName.name=newName;
        updateName.save();
         res.send('update');
     })
    }catch(err){
        console.log(err);
    }
})

app.delete('/delete/:id',(req,res)=>{
    const id=req.params.id;
    Crud.findByIdAndDelete(id,(err,data)=>{
        if(err){
            res.status(400).send(err);
        }else{
            res.status(200).send(data);
        }
    })
})
/*app.get('/messages/sync',(req,res)=>{
    Crud.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    })
})

app.post('/messages/new',(req,res)=>{
    const dbMessage=req.body;
   Crud.create(dbMessage,(err,data)=>{
       if(err){
           res.status(500).send(err);
       }else{
           res.status(201).send(data);
       }
   })
})*/


app.listen(port,(()=>{console.log(`the port is running on ${port}`)}))
