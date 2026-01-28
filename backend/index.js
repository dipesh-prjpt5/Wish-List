import express from 'express';
import dotenv from 'dotenv'
import userRoutes from './src/routes/user.route.js'
import wishListRoutes from './src/routes/wishItem.route.js'
import productRouters from './src/routes/product.route.js'

const app = express();
dotenv.config();
app.use(express.json())

const PORT = process.env.PORT;

app.use('/auth', userRoutes);

app.use('/wishlist', wishListRoutes);

app.use('/products', productRouters);  

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});