import express from "express"
import { createSuperadmin, getAllSuperadmins, updateSuperadmin } from "../controller/superadminController.js"

const superadminRoute = express.Router();

superadminRoute.post("/create", createSuperadmin);
superadminRoute.get("/get", getAllSuperadmins);
superadminRoute.patch("/update/:id", updateSuperadmin);

export default superadminRoute;