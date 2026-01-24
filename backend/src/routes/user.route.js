import express from 'express'
import { handleNewUser, handleLogIn } from '../controllers/user.controller.js'

const router = express.Router();

router.post("/sign-in", handleLogIn)
router.post("/sign-up", handleNewUser)

export default router;