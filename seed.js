import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './src/models/product.model.js';

dotenv.config({ path: './.env' });

const products = [
  {
    "name": "Wireless Bluetooth Headphones",
    "description": "High quality wireless headphones with noise cancellation.",
    "price": 59.99,
    "category": "Electronics",
    "stock": 150,
    "imageUrl": "https://example.com/images/headphones.jpg"
  },
  {
    "name": "Gaming Mouse",
    "description": "Ergonomic gaming mouse with customizable RGB lighting.",
    "price": 29.99,
    "category": "Electronics",
    "stock": 75,
    "imageUrl": "https://example.com/images/gaming-mouse.jpg"
  },
  {
    "name": "Cotton T-Shirt",
    "description": "Soft and comfortable cotton t-shirt, available in various sizes.",
    "price": 14.99,
    "category": "Apparel",
    "stock": 300,
    "imageUrl": "https://example.com/images/tshirt.jpg"
  },
  {
    "name": "Stainless Steel Water Bottle",
    "description": "Insulated water bottle that keeps drinks cold for 24 hours.",
    "price": 22.5,
    "category": "Home & Kitchen",
    "stock": 120,
    "imageUrl": "https://example.com/images/water-bottle.jpg"
  },
  {
    "name": "Yoga Mat",
    "description": "Eco-friendly non-slip yoga mat with carrying strap.",
    "price": 19.99,
    "category": "Sports & Outdoors",
    "stock": 90,
    "imageUrl": "https://example.com/images/yoga-mat.jpg"
  }
];


const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany(); // Clear existing products
    await Product.insertMany(products);
    console.log('Database seeded!');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedDB();
