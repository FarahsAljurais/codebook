import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, ProductsListPage, ProductDetailPage } from '../pages';
export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsListPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />

      </Routes>
    </>
  );
};
