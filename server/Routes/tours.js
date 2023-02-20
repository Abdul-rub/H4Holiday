import express from "express"

import { createTour, deleteTour, getAllTour, getSingleTour, getTourBySearch, updateTour } from "../Controller/tourController.js"

const router = express.Router()

//Create new tour
router.post("/",createTour)

//Update tour
router.put("/:id",updateTour)

//Delete tour
router.delete("/:id",deleteTour)

//Get Single tour
router.get("/:id",getSingleTour)

//Get All tour
router.get("/",getAllTour)


//Search tours
router.get("/search/getTourBySearch",getTourBySearch)





export default router;