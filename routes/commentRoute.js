import express from "express"
import { createComment, deleteComment, getAllComments } from "../controller/commentController.js"

const commentRoute = express.Router();

commentRoute.post("/create", createComment);
commentRoute.get("/get", getAllComments);
commentRoute.delete("/delete/:id", deleteComment);

export default commentRoute;