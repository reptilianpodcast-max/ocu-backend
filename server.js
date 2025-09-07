import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import adminRoute from "./routes/adminRoute.js"
import articleRoute from "./routes/articleRoute.js"
import newsRoute from "./routes/newsRoute.js"
import commentRoute from "./routes/commentRoute.js"
import superadminRoute from "./routes/superadminRoute.js"
import cors from "cors";

const app = express();

app.use(bodyParser.json());
app.use(cors());
dotenv.config();
const PORT = process.env.PORT || 8080;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(() => {
    console.log("Database connected successfully.")
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
}).catch((error) => console.log(error));

app.use("/api/admin", adminRoute);
app.use("/api/article", articleRoute);
app.use("/api/news", newsRoute);
app.use("/api/comment", commentRoute);
app.use("/api/superadmin", superadminRoute);