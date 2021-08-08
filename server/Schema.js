import mongoose from 'mongoose';

const CrudSchema=mongoose.Schema({
  name:String,
  Email:String,

})

export default mongoose.model('crudfull',CrudSchema);