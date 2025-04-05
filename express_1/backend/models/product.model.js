import { pool } from '../config/db.js';

export const createProductTable = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS products (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      image VARCHAR(255) NOT NULL,
      price DECIMAL(10, 2) NOT NULL,
      description TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
};
