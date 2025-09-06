import express from "express"
import { createAdmin, deleteAdmin, getAllAdmins, updateAdmin } from "../controller/adminController.js"

const adminRoute = express.Router();

adminRoute.post("/create", createAdmin);
adminRoute.get("/get", getAllAdmins);
adminRoute.patch("/update/:id", updateAdmin);
adminRoute.delete("/delete/:id", deleteAdmin);

export default adminRoute;