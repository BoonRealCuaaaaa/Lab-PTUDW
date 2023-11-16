import express from 'express'
import task2Controller from '../controllers/task2Controller.js'

const router = express.Router()
router.get("/", task2Controller.show)

export default router