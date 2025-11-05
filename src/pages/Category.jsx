import React, { useState } from "react";
import "../styles/category.css";
import { useParams, useNavigate } from "react-router-dom";

const Category = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  // --- Sample realistic data (25 items) ---
  const allProducts = [
    {
      id: 1,
      name: "Men's Casual Shirt",
      price: 799,
      image:
        "https://images.unsplash.com/photo-1520975918318-3e8a2c7be1c5?w=600",
      category: "fashion",
    },
    {
      id: 2,
      name: "Women's Summer Dress",
      price: 1199,
      image:
        "https://images.unsplash.com/photo-1542062703-9a56f6eac51f?w=600",
      category: "fashion",
    },
    {
      id: 3,
      name: "Running Shoes",
      price: 2999,
      image:
        "https://images.unsplash.com/photo-1600185365926-3a2c1d217b94?w=600",
      category: "fashion",
    },
    {
      id: 4,
      name: "Wireless Headphones",
      price: 2599,
      image:
        "https://images.unsplash.com/photo-1606813902779-cb25064b84c7?w=600",
      category: "electronics",
    },
    {
      id: 5,
      name: "Smartphone 5G",
      price: 18999,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
      category: "electronics",
    },
    {
      id: 6,
      name: "Bluetooth Speaker",
      price: 1799,
      image:
        "https://images.unsplash.com/photo-1618365908648-fb46d8f3f2d2?w=600",
      category: "electronics",
    },
    {
      id: 7,
      name: "Smart LED TV 43”",
      price: 26999,
      image:
        "https://images.unsplash.com/photo-1593784991095-7d3c1e56dcec?w=600",
      category: "appliances",
    },
    {
      id: 8,
      name: "Front Load Washing Machine",
      price: 18999,
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600",
      category: "appliances",
    },
    {
      id: 9,
      name: "Double Door Refrigerator",
      price: 22999,
      image:
        "https://images.unsplash.com/photo-1609943244095-f4b0b1f3db2c?w=600",
      category: "appliances",
    },
    {
      id: 10,
      name: "Makeup Essentials Kit",
      price: 1499,
      image:
        "https://images.unsplash.com/photo-1583241800654-5e5a478b4b4e?w=600",
      category: "beauty",
    },
    {
      id: 11,
      name: "Perfume Collection",
      price: 999,
      image:
        "https://images.unsplash.com/photo-1610992934824-bad7b5a6ad08?w=600",
      category: "beauty",
    },
    {
      id: 12,
      name: "Hair Dryer",
      price: 1199,
      image:
        "https://images.unsplash.com/photo-1606813902838-7dfc1b6e474a?w=600",
      category: "beauty",
    },
    // Add more random 13–25 similar items (mix)
    ...Array.from({ length: 13 }, (_, i) => ({
      id: 13 + i,
      name: `Sample Product ${i + 1}`,
      price: 499 + i * 100,
      image: `https://source.unsplash.com/400x400/?product,${i}`,
      category: ["fashion", "electronics", "appliances", "beauty"][
        i % 4
      ],
    })),
  ];

  // --- Filter by category name ---
  const filtered = allProducts.filter(
    (p) => p.category.toLowerCase() === name.toLowerCase()
  );

  const [visibleCount, setVisibleCount] = useState(8);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="category-page">
      <h2 className="cat-title">{name.toUpperCase()}</h2>

      <div className="product-grid">
        {filtered.slice(0, visibleCount).map((item) => (
          <div
            className="product-card"
            key={item.id}
            onClick={() => navigate(`/product/${item.id}`)}
          >
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
          </div>
        ))}
      </div>

      {visibleCount < filtered.length && (
        <div className="load-more-container">
          <button className="load-more" onClick={loadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Category;
