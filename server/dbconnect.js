import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const db=mongoose.connect(process.env.MONGOURL,{
    useFindAndModify:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('mongodb connected')
}).catch((error)=>{
    console.log(error);
})

export default db;