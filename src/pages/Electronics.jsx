import React, { useState } from "react";
import "../styles/electronics.css";

const Electronics = () => {
  const allProducts = [
    { img: "https://images.unsplash.com/photo-1510557880182-3d4d3c52a0c2?auto=format&fit=crop&w=400&q=60", name: "Wireless Headphones", price: "₹1,999" },
    { img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=60", name: "Gaming Laptop", price: "₹64,999" },
    { img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=60", name: "Smartphone", price: "₹14,499" },
    { img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=60", name: "Bluetooth Speaker", price: "₹2,499" },
    { img: "https://images.unsplash.com/photo-1580894894513-3443ef5f3795?auto=format&fit=crop&w=400&q=60", name: "Smart Watch", price: "₹3,999" },
    { img: "https://images.unsplash.com/photo-1585386959984-a41552231693?auto=format&fit=crop&w=400&q=60", name: "Tablet", price: "₹10,999" },
    { img: "https://images.unsplash.com/photo-1618366712010-f4a76e64f5d3?auto=format&fit=crop&w=400&q=60", name: "Camera", price: "₹22,499" },
    { img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=60", name: "Wireless Mouse", price: "₹599" },
    { img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=400&q=60", name: "Mechanical Keyboard", price: "₹1,299" },
    { img: "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=400&q=60", name: "Drone", price: "₹24,999" },
    { img: "https://images.unsplash.com/photo-1571781923307-5c36041a17b8?auto=format&fit=crop&w=400&q=60", name: "External Hard Disk", price: "₹4,299" },
    { img: "https://images.unsplash.com/photo-1580894894513-3443ef5f3795?auto=format&fit=crop&w=400&q=60", name: "Gaming Controller", price: "₹1,899" },
    { img: "https://images.unsplash.com/photo-1603791452906-bb46d8389902?auto=format&fit=crop&w=400&q=60", name: "Smart TV 32''", price: "₹11,999" },
    { img: "https://images.unsplash.com/photo-1585386959984-a41552231693?auto=format&fit=crop&w=400&q=60", name: "Projector Mini", price: "₹8,499" },
    { img: "https://images.unsplash.com/photo-1611078489935-0cb964de46d5?auto=format&fit=crop&w=400&q=60", name: "VR Headset", price: "₹5,499" },
    { img: "https://images.unsplash.com/photo-1606813902774-d7d8d6f7d2b4?auto=format&fit=crop&w=400&q=60", name: "Power Bank", price: "₹1,099" },
    { img: "https://images.unsplash.com/photo-1555617117-08d3f8c7a8b1?auto=format&fit=crop&w=400&q=60", name: "Router", price: "₹1,299" },
    { img: "https://images.unsplash.com/photo-1585391870165-320c9dfe84dd?auto=format&fit=crop&w=400&q=60", name: "Earbuds", price: "₹1,599" },
    { img: "https://images.unsplash.com/photo-1606813902786-88d7e3e7bfb3?auto=format&fit=crop&w=400&q=60", name: "Smart Light Bulb", price: "₹499" },
    { img: "https://images.unsplash.com/photo-1553456558-aff63285bddb?auto=format&fit=crop&w=400&q=60", name: "Bluetooth Adapter", price: "₹349" },
  ];

  const [visibleCount, setVisibleCount] = useState(8);
  const loadMore = () => setVisibleCount((p) => p + 8);

  return (
    <div className="electronics">
      <header className="electronics-header">
        <h1>Electronics & Gadgets</h1>
        <p>Explore cutting-edge gadgets and smart devices at unbeatable prices!</p>
      </header>

      <section className="electronics-grid">
        {allProducts.slice(0, visibleCount).map((p, i) => (
          <div className="product-card" key={i}>
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </section>

      {visibleCount < allProducts.length && (
        <div className="load-more">
          <button onClick={loadMore}>Load More</button>
        </div>
      )}

      <footer className="electronics-footer">
        <p>© 2025 Stackly Mart | Electronics Division</p>
      </footer>
    </div>
  );
};

export default Electronics;
