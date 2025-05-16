import express from 'express';
import dotenv from 'dotenv';
// import authRoutes from './routes/auth.routes.js';
import productRoutes from './routes/product.routes.js';
// import cartRoutes from './routes/cart.routes.js';
// import orderRoutes from './routes/order.routes.js';


dotenv.config({ path: './.env' }); // Explicit path

const app = express();

app.use(express.json());



// app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
// app.use('/api/cart', cartRoutes);
// app.use('/api/orders', orderRoutes);


app.get('/', (req, res) => {
  res.send('E-commerce backend API is running...');
});

export default app;
