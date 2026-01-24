import { WishItem } from '../models/WishItem.model.js'

export const addItemInWishList = async (req, res) => {
    try {
        const { name, description, price, url } = req.body;
        if (!name) {
            return res.status(400).json({
                sucess: false,
                message: "All fields are required."
            })
        }
        const existingItem = User.findOne(name);
        if (existingItem) {
            return res.status(409).json({
                sucess: false,
                message: "Item Already exists."
            })
        }
        const newItem = await WishItem.create({
            name, description, price, url
        })
        return res.status(201).json({
            sucess: true,
            message: "Item Added successfully.",
            newItem
        })
    } catch (err) {
        return res.status(500).json({
            sucess: false,
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
            sucess: true,
            message: "Item Deleted successfully.",
            item
        })
    } catch (err) {
        return res.status(500).json({
            sucess: false,
            message: "Internal Server error.",
            error: err.message
        })
    }
}