import mongoose from "mongoose";
import postmodel from "../model/postmodel.js";

export const getPosts = async (req, res) => {
  try {
    const post = await postmodel.find();
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json(err);
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = await postmodel(post);
  try {
    newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(409).json(err);
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);
  await postmodel.findByIdAndDelete(id);
  res.json({ message: "Done" });
  console.log("done");
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No post with id: ${id}`);
  const updatedPost = await postmodel.findByIdAndUpdate(
    _id,
    { ...post, _id },
    {
      new: true,
    }
  );
  res.status(201).json({ message: "Done" });
  console.log("true");
};
