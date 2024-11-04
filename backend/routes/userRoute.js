import express from "express";

import { createUser}from "../controllers/userController.js";
import { getUser}from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUser);
router.post("/", createUser);

//router.put("/:id", updateProduct);
//router.delete("/:id", deleteProduct);

export default router;