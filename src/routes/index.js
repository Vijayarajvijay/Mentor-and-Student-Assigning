import express from 'express'
import mentorRoutes from './mentor.js'
import studenRoutes from './student.js'

const router = express.Router()

router.use('/mentor',mentorRoutes)
router.use('/student',studenRoutes)

export default router