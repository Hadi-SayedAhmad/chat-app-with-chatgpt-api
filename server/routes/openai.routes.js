import express from 'express'
import { postText } from '../controllers/openai.controller.js'
const router = express.Router();

router.post("/text", postText)

export default router;