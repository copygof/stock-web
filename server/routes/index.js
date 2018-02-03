import express from 'express'
import auth from './auth'

// use express router
const router = express.Router()

// registor routes auth at /auth
router.use('/auth', auth)


export default router
