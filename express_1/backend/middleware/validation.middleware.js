export const validateProduct = (req, res, next) => {
    const { name, image, price, description } = req.body;
    const errors = [];
  
    if (!name || typeof name !== 'string' || name.trim() === '') {
      errors.push({ field: 'name', message: 'Name is required and must be a non-empty string' });
    }
  
    if (price === undefined || typeof price !== 'number' || price <= 0) {
      errors.push({ field: 'price', message: 'Price must be a number greater than 0' });
    }
  
    if (image && typeof image !== 'string') {
      errors.push({ field: 'image', message: 'Image must be a string' });
    }
  
    if (description && typeof description !== 'string') {
      errors.push({ field: 'description', message: 'Description must be a string' });
    }
  
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }
  
    next(); 
  };