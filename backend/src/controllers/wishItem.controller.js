import { WishItem } from '../models/WishItem.model.js'

export const addItemInWishList = async (req, res) => {
    try {
        const { name, description, price, url } = req.body;
        if (!name) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            })
        }
        const existingItem = await User.findOne(name);
        if (existingItem) {
            return res.status(409).json({
                success: false,
                message: "Item Already exists."
            })
        }
        const newItem = await WishItem.create({
            name, description, price, url
        })
        return res.status(201).json({
            success: true,
            message: "Item Added successfully.",
            newItem
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Internal Server error.",
            error: err.message
        })
    }
}

export const removeItemInWishList = async (req, res) => {
    try {
        const { itemId } = req.params;
        const item = WishItem.findByIdAndDelete(itemId);
        res.status(201).json({
            success: true,
            message: "Item Deleted successfully.",
            item
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Internal Server error.",
            error: err.message
        })
    }
}