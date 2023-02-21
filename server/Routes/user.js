import express from "express";
import {
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} from "../Controller/userController.js";
import { verifyAdmin, verifyUser } from "../Middleware/verifyToken.js";

const router = express.Router();



//Update User
router.put("/:id", verifyUser, updateUser);

//Delete User
router.delete("/:id",verifyUser, deleteUser);

//Get Single User
router.get("/:id", verifyUser, getSingleUser);

//Get All User
router.get("/", verifyAdmin, getAllUser);

export default router;
