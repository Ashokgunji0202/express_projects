import { pool } from '../config/db.js';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


// export const createProduct = async (req, res) => {
//   const { name, image, price, description } = req.body;
//   try {
//     const result = await pool.query(
//       `INSERT INTO products (name, image, price, description)
//        VALUES ($1, $2, $3, $4) RETURNING *`,
//       [name, image, price, description]
//     );
//     res.status(201).json({Success: true, message: 'Product created', product: result.rows[0]});
//   } catch (err) {
//     console.log("Error "+err.message)
//     res.status(500).json({Success: false,message:`Failed to create product`, error: err.message });
//   }
// };

export const createProduct = async (req, res) => {
  const { name, image, price, description } = req.body;

  try {
    const product = await prisma.product.create({
      data: {
        name,
        image,
        price,
        description,
      },
    });

    res.status(201).json({
      Success: true,
      message: 'Product created',
      product: product,
    });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({
      Success: false,
      message: 'Failed to create product',
      error: err.message,
    });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        created_at: 'desc',
      },
    });

    res.status(200).json({ data: products });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ error: err.message });
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await prisma.product.findUnique({
      where: {
        id: parseInt(id), // Convert to integer
      },
    });

    if (!product) {
      return res.status(404).json({ Success: false, message: 'Product not found' });
    }

    res.json({ Success: true, message: 'Product found', product });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ error: err.message });
  }
};

export const updateProductById = async (req, res) => {
  const { id } = req.params;
  const { name, image, price, description } = req.body;

  try {
    // First, check if product exists
    const existingProduct = await prisma.product.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existingProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Update product
    const updatedProduct = await prisma.product.update({
      where: { id: parseInt(id) },
      data: {
        name,
        image,
        price,
        description,
      },
    });

    res.json(updatedProduct);
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ error: err.message });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    // Check if product exists
    const existingProduct = await prisma.product.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existingProduct) {
      return res.status(404).json({ Success: false, message: 'Product not found' });
    }

    // Delete product
    const deletedProduct = await prisma.product.delete({
      where: { id: parseInt(id) },
    });

    res.json({ Success: true, message: 'Product deleted', product: deletedProduct });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
