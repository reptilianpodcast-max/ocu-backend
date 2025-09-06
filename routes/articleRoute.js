import express from "express"
import { createArticle, deleteArticle, getAllArticles, updateArticle } from "../controller/articleController.js"

const articleRoute = express.Router();

articleRoute.post("/create", createArticle);
articleRoute.get("/get", getAllArticles);
articleRoute.patch("/update/:id", updateArticle);
articleRoute.delete("/delete/:id", deleteArticle);

export default articleRoute;