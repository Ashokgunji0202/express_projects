import { create } from 'zustand';

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  
  // Craeting the product 
  createProduct: async (newProduct) => {
    
    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });

      const data = await response.json();

      set((state) => ({
        products: [...state.products, data.data],
      }));

      return { success: true, message: 'Product created successfully' };
    } catch (error) {
      console.error('Error creating product:', error);
      return { success: false, message: 'Something went wrong' };
    }
  },
  fetchProducts: async () => {
    try {
      const response = await fetch('/api/products/allproducts');
      const data = await response.json();
      set({ products: data.data });
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  },

  deleteProduct: async (productId) => {
    try {
      const response = await fetch(`/api/products/${productId}`, {
        method: 'DELETE',
      });
      const data = await response.json();

      // Update the state to remove the deleted product without a page refresh the main 
      set((state) => ({
        products: state.products.filter((product) => product.id !== productId),
      }));
      return { success: true, message: 'Product deleted successfully' };
    } catch (error) {
      console.error('Error deleting product:', error);
      return { success: false, message: 'Something went wrong' };
    }
  },
  updateProduct: async (productId, updatedProduct) => {
    try {
      const response = await fetch(`/api/products/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
      });
      const data = await response.json();
  
      // Update the state to reflect the updated product without a page refresh the main
      set((state) => ({
        products: state.products.map((product) =>
          product.id === productId ? data : product
        ),
      }));
  
      return { success: true, message: 'Product updated successfully' };
    } catch (error) {
      console.error('Error updating product:', error);
      return { success: false, message: 'Something went wrong' };
    }
  }

}));  
