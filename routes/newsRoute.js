import express from "express"
import { createNews, deleteNews, getAllNewss, updateNews } from "../controller/newsController.js"

const newsRoute = express.Router();

newsRoute.post("/create", createNews);
newsRoute.get("/get", getAllNewss);
newsRoute.patch("/update/:id", updateNews);
newsRoute.delete("/delete/:id", deleteNews);

export default newsRoute;