import React from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface Category {
  id: number;
  name: string;
  products: Product[];
}

interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}

export type { Product, Category, User }; // Exporting types for use in the application