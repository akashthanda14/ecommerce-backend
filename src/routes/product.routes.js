import express from 'express';
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/product.controller.js';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', createProduct); // Protect with admin middleware later
router.put('/:id', updateProduct); // Protect with admin
router.delete('/:id', deleteProduct); // Protect with admin

export default router;
