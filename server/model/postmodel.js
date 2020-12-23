import mongoose from "mongoose";
const { Schema } = mongoose;

const postSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  

  date: { type: Date, default: Date.now },
});

const postmodel = mongoose.model('postmodel', postSchema);

export default postmodel;