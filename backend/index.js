import express from 'express';
import dotenv from 'dotenv'
import userRoutes from './src/routes/user.route.js'
import wishListRoutes from './src/routes/wishItem.route.js'

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use('/auth', userRoutes);

app.use('/wishlist', wishListRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});