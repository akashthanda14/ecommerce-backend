import Product from '../models/product.model.js';

// Fetch all products
export const fetchAllProducts = async () => {
  return await Product.find({});
};

// Fetch a product by ID
export const fetchProductById = async (id) => {
  return await Product.findById(id);
};

// Create a new product
export const createNewProduct = async (productData) => {
  const product = new Product(productData);
  return await product.save();
};

// Update an existing product by ID
export const updateProductById = async (id, updateData) => {
  const product = await Product.findById(id);
  if (!product) {
    throw new Error('Product not found');
  }
  Object.assign(product, updateData);
  return await product.save();
};

// Delete product by ID
export const deleteProductById = async (id) => {
  const product = await Product.findById(id);
  if (!product) {
    throw new Error('Product not found');
  }
 await product.deleteOne();

  return;
};
