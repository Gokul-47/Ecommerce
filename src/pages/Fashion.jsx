import React, { useState } from "react";
import "../styles/fashion.css";

const Fashion = () => {
  const allProducts = [
    {
      img: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?auto=format&fit=crop&w=400&q=60",
      name: "Men’s Casual Shirt",
      price: "₹799",
    },
    {
      img: "https://images.unsplash.com/photo-1601333142851-529a1e2ebd97?auto=format&fit=crop&w=400&q=60",
      name: "Women’s Denim Jacket",
      price: "₹1,299",
    },
    {
      img: "https://images.unsplash.com/photo-1583743814966-8936f5b7b1a5?auto=format&fit=crop&w=400&q=60",
      name: "Summer Dress",
      price: "₹1,099",
    },
    {
      img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&w=400&q=60",
      name: "Men’s Jeans",
      price: "₹1,699",
    },
    {
      img: "https://images.unsplash.com/photo-1588514727390-91fd5ebaef1e?auto=format&fit=crop&w=400&q=60",
      name: "Stylish Hoodie",
      price: "₹999",
    },
    {
      img: "https://images.unsplash.com/photo-1582725461742-3a1430bdc0d2?auto=format&fit=crop&w=400&q=60",
      name: "Women’s Handbag",
      price: "₹1,799",
    },
    {
      img: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=400&q=60",
      name: "Ethnic Kurta Set",
      price: "₹1,499",
    },
    {
      img: "https://images.unsplash.com/photo-1600180758890-6c9379b5a6c6?auto=format&fit=crop&w=400&q=60",
      name: "Sportswear T-shirt",
      price: "₹699",
    },
    {
      img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=60",
      name: "Men’s Formal Blazer",
      price: "₹2,499",
    },
    {
      img: "https://images.unsplash.com/photo-1520962918287-7448c2878f65?auto=format&fit=crop&w=400&q=60",
      name: "Women’s Saree",
      price: "₹2,999",
    },
    {
      img: "https://images.unsplash.com/photo-1583744946564-b52ac43a9b05?auto=format&fit=crop&w=400&q=60",
      name: "Men’s Polo T-shirt",
      price: "₹899",
    },
    {
      img: "https://images.unsplash.com/photo-1571731956672-64353077e188?auto=format&fit=crop&w=400&q=60",
      name: "Leather Belt",
      price: "₹599",
    },
    {
      img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=60",
      name: "Sneakers for Men",
      price: "₹1,899",
    },
    {
      img: "https://images.unsplash.com/photo-1593032465171-cd8a70b7b3f3?auto=format&fit=crop&w=400&q=60",
      name: "Women’s Sunglasses",
      price: "₹799",
    },
    {
      img: "https://images.unsplash.com/photo-1592878904946-b0cf448d8711?auto=format&fit=crop&w=400&q=60",
      name: "Men’s Watch",
      price: "₹1,999",
    },
    {
      img: "https://images.unsplash.com/photo-1611078489935-0cb964de46d5?auto=format&fit=crop&w=400&q=60",
      name: "Women’s Sandals",
      price: "₹999",
    },
    {
      img: "https://images.unsplash.com/photo-1611080626918-48c76b6b8a57?auto=format&fit=crop&w=400&q=60",
      name: "Casual Skirt",
      price: "₹899",
    },
    {
      img: "https://images.unsplash.com/photo-1576995853123-5dc4f51c4b8f?auto=format&fit=crop&w=400&q=60",
      name: "Men’s Leather Shoes",
      price: "₹2,299",
    },
    {
      img: "https://images.unsplash.com/photo-1598550476439-15d2a9e90d2e?auto=format&fit=crop&w=400&q=60",
      name: "Women’s Earrings",
      price: "₹499",
    },
    {
      img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=60",
      name: "Cap & Accessories",
      price: "₹349",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(8);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  return (
    <div className="fashion">
      <header className="fashion-header">
        <h1>Fashion Collections</h1>
        <p>Discover the latest trends in clothing, shoes, and accessories!</p>
      </header>

      <section className="fashion-grid">
        {allProducts.slice(0, visibleCount).map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </section>

      {visibleCount < allProducts.length && (
        <div className="load-more">
          <button onClick={loadMore}>Load More</button>
        </div>
      )}

      <footer className="fashion-footer">
        <p>© 2025 Stackly Mart | Fashion Division</p>
      </footer>
    </div>
  );
};

export default Fashion;
