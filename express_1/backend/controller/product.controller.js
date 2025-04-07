import { pool } from '../config/db.js';


export const createProduct = async (req, res) => {
  const { name, image, price, description } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO products (name, image, price, description)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [name, image, price, description]
    );
    res.status(201).json({Success: true, message: 'Product created', product: result.rows[0]});
  } catch (err) {
    console.log("Error "+err.message)
    res.status(500).json({Success: false,message:`Failed to create product`, error: err.message });
  }
};
export const getAllProducts = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products');
    res.status(200).json(result.rows);
  } catch (err) {
    console.log("Error "+err.message)
    res.status(500).json({ error: err.message });
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({Success: false, message: 'Product not found' });
    }
    res.json({Success: true, message: 'Product found', product:   result.rows[0]});
  } catch (err) {
    console.log("Error "+err.message)
    res.status(500).json({ error: err.message });
  }
};

export const updateProductById = async (req, res) => {
  const { id } = req.params;
  const { name, image, price, description } = req.body;
  try {
    const result = await pool.query(
      `UPDATE products SET name=$1, image=$2, price=$3, description=$4
       WHERE id=$5 RETURNING *`,
      [name, image, price, description, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.log("Error "+err.message)
    res.status(500).json({ error: err.message });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM products WHERE id=$1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({Success: false, message: 'Product not found' });
    }
    res.json({Success: true, message: 'Product deleted', product: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
