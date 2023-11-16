import express from 'express'
import task4Controller from '../controllers/task4Controller.js'

const router = express.Router()
router.get("/", task4Controller.show)
router.get("/task4-details/:name",task4Controller.showDetail)

export default router