import express from 'express'
import task3Controller from '../controllers/task3Controller.js'

const router = express.Router()
router.get("/",task3Controller.show)
router.get("/:id", task3Controller.show)

export default router