import express from 'express';
import { addItemInWishList, removeItemInWishList } from '../controllers/wishItem.controller.js'

const router = express.Router();

router.post("/", addItemInWishList)
router.delete("/", removeItemInWishList)

export default router;