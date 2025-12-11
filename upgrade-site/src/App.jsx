import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Header />
        <main className="max-w-6xl mx-auto px-4 pb-20 pt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/produto/:slug" element={<ProductDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
