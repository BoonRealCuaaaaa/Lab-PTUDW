import express from 'express'
import task1Controller from '../controllers/task1Controller.js'

const router = express.Router()
router.get("/", task1Controller.task1Handle)

export default router