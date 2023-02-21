import express from "express";
import {
  createBooking,
  getBooking,
  getMultiBooking,
} from "../Controller/bookingController.js";

import { verifyUser } from "../Middleware/verifyToken.js";

const router = express.Router();

router.post("/", verifyUser, createBooking);

router.get("/:id", verifyUser, getBooking);

router.get("/", verifyUser, getMultiBooking);

export default router;
