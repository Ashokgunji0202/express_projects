import express from 'express';
import { validateProduct } from '../middleware/validation.middleware.js';
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProduct
} from '../controller/product.controller.js'; 

const router = express.Router();

router.post('/',validateProduct, createProduct);
router.get('/allproducts', getAllProducts);
router.get('/:id', getProductById);
router.put('/:id', updateProductById);
router.delete('/:id', deleteProduct);

export default router;