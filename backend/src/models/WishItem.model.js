import mongoose from 'mongoose'

const WishItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,

    },
    price: {
        type: Number,

    },
    url: {
        type: String,

    }
});

export const WishItem = mongoose.model('WishItem', WishItemSchema);