import { User } from '../models/User.model';

export const handleNewUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({
                sucess: false,
                message: "All fields are required."
            })
        }
        const existingUser = User.findOne(email);
        if (existingUser) {
            return res.status(409).json({
                sucess: false,
                message: "User Already exists."
            })
        }
        const newUser = await User.create({
            name,
            email,
            password
        })
        return res.status(201).json({
            sucess: true,
            message: "User created successfully.",
            newUser
        })
    } catch (err) {
        return res.status(500).json({
            sucess: false,
            message: "Internal Server error.",
            error: err.message
        })
    }
}

export const handleLogIn = async (req, res) => {
    try {
        const user = await User.findOne(email);
        if (!user) {
            return res.status(404).json({
                sucess: false,
                message: "User Not Found."
            })
        }
        return res.status(200).json({
            sucess: true,
            message: "User LogIn successful.",
            user
        })
    } catch (err) {
        return res.status(500).json({
            sucess: false,
            message: "Internal Server error.",
            error: err.message
        })
    }
}