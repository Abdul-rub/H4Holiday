import express from 'express'
import { createReview } from '../Controller/reviewsController.js'
import {verifyUser} from "../Middleware/verifyToken.js"


const router = express.Router()

router.post('/:tourId', verifyUser, createReview)

export default router