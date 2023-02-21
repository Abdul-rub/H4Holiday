import express from "express";

import {
  createTour,
  deleteTour,
  getAllTour,
  getFeaturedTour,
  getSingleTour,
  getTourBySearch,
  getTourCount,
  updateTour,
} from "../Controller/tourController.js";
import { verifyAdmin } from "../Middleware/verifyToken.js";



const router = express.Router();



//Create new tour
router.post("/", verifyAdmin,createTour);

//Update tour
router.put("/:id",verifyAdmin, updateTour);

//Delete tour
router.delete("/:id",verifyAdmin, deleteTour);

//Get Single tour
router.get("/:id", getSingleTour);

//Get All tour
router.get("/", getAllTour);

//Search tours
router.get("/search/getTourBySearch", getTourBySearch);

//Featured data
router.get("/search/getFeaturedTour", getFeaturedTour);

//get Tour Count
router.get("/search/getTourCount", getTourCount);

export default router;
