// index.js
const express = require('express');
const db = require('./db');

const app = express();
app.use(express.json());

// Get all products
app.get('/products', (req, res) => {
    const sql = 'SELECT * FROM products';
    db.query(sql, (err, results) => {
      if (err) {
        console.error('Error executing query:', err); // Log the error details
        return res.status(500).json({ error: 'Database error occurred', details: err });
      }
      res.json(results);
    });
  });
  
  

// Get product by ID
app.get('/products/:id', (req, res) => {
  const sql = 'SELECT * FROM products WHERE id = ?';
  const id = req.params.id;
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Database error occurred' });
    }
    if (result.length === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(result[0]); // Return the first matching product
  });
});

// Create a new product
app.post('/products', (req, res) => {
  const { name, description, price, stock, category_id } = req.body;

  // Validate required fields
  if (!name || !price || !category_id) {
    return res.status(400).json({ error: 'Name, price, and category_id are required' });
  }

  const sql = 'INSERT INTO products (name, description, price, stock, category_id) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [name, description, price, stock || 0, category_id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Database error occurred' });
    }
    res.status(201).json({ id: result.insertId, message: 'Product created successfully' });
  });
});

// Update a product
app.put('/products/:id', (req, res) => {
  const { name, description, price, stock, category_id } = req.body;
  const id = req.params.id;

  // Validate required fields
  if (!name || !price || !category_id) {
    return res.status(400).json({ error: 'Name, price, and category_id are required' });
  }

  const sql = 'UPDATE products SET name = ?, description = ?, price = ?, stock = ?, category_id = ? WHERE id = ?';
  db.query(sql, [name, description, price, stock, category_id, id], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Database error occurred' });
    }
    res.json({ message: 'Product updated successfully' });
  });
});

// Delete a product
app.delete('/products/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM products WHERE id = ?';
  db.query(sql, [id], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Database error occurred' });
    }
    res.json({ message: 'Product deleted successfully' });
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
