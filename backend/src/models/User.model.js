import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String, required: true
    },
    wishList: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'WishItem'
        }
    ]
});

export const User = mongoose.model('User', UserSchema);
