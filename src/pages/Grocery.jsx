import React, { useState } from "react";
import "../styles/grocery.css";

const Grocery = () => {
  const allProducts = [
    { img: "https://images.unsplash.com/photo-1586201375761-83865001e17d?auto=format&fit=crop&w=400&q=60", name: "Organic Apples 1 kg", price: "₹179" },
    { img: "https://images.unsplash.com/photo-1590080875831-9c9e6f0ad56d?auto=format&fit=crop&w=400&q=60", name: "Fresh Milk 1 L", price: "₹59" },
    { img: "https://images.unsplash.com/photo-1626200869184-cc808ea37b1d?auto=format&fit=crop&w=400&q=60", name: "Whole Wheat Atta 5 kg", price: "₹239" },
    { img: "https://images.unsplash.com/photo-1604898853167-4f1c7b9b9c8f?auto=format&fit=crop&w=400&q=60", name: "Basmati Rice 1 kg", price: "₹159" },
    { img: "https://images.unsplash.com/photo-1623066644096-45b4638e4fdf?auto=format&fit=crop&w=400&q=60", name: "Tata Salt 1 kg", price: "₹29" },
    { img: "https://images.unsplash.com/photo-1623660242981-41fb6c6a4b7a?auto=format&fit=crop&w=400&q=60", name: "Sunflower Oil 1 L", price: "₹139" },
    { img: "https://images.unsplash.com/photo-1590080875831-9c9e6f0ad56d?auto=format&fit=crop&w=400&q=60", name: "Curd 500 ml Pack", price: "₹45" },
    { img: "https://images.unsplash.com/photo-1585238342023-78fddda1b03a?auto=format&fit=crop&w=400&q=60", name: "Good Day Biscuits Pack", price: "₹30" },
    { img: "https://images.unsplash.com/photo-1601050690597-afe7a1e6b1b4?auto=format&fit=crop&w=400&q=60", name: "Nestlé Maggie Noodles 6 pcs", price: "₹75" },
    { img: "https://images.unsplash.com/photo-1615486363277-8b9bdb60f7e8?auto=format&fit=crop&w=400&q=60", name: "Fortune Sugar 1 kg", price: "₹55" },
    { img: "https://images.unsplash.com/photo-1615484478311-2d07ef991d54?auto=format&fit=crop&w=400&q=60", name: "Tata Tea Gold 250 g", price: "₹125" },
    { img: "https://images.unsplash.com/photo-1606715894518-46f281e420d3?auto=format&fit=crop&w=400&q=60", name: "Coca-Cola 1 L Bottle", price: "₹45" },
    { img: "https://images.unsplash.com/photo-1585238342023-78fddda1b03a?auto=format&fit=crop&w=400&q=60", name: "Parle-G Biscuits 10 pcs", price: "₹60" },
    { img: "https://images.unsplash.com/photo-1623066644096-45b4638e4fdf?auto=format&fit=crop&w=400&q=60", name: "Refined Oil 5 L Can", price: "₹699" },
    { img: "https://images.unsplash.com/photo-1615486363277-8b9bdb60f7e8?auto=format&fit=crop&w=400&q=60", name: "Sugar Free Green 100 Tabs", price: "₹199" },
    { img: "https://images.unsplash.com/photo-1623660242981-41fb6c6a4b7a?auto=format&fit=crop&w=400&q=60", name: "Detergent Powder 2 kg", price: "₹229" },
    { img: "https://images.unsplash.com/photo-1604898853167-4f1c7b9b9c8f?auto=format&fit=crop&w=400&q=60", name: "Daawat Rice 5 kg Bag", price: "₹699" },
    { img: "https://images.unsplash.com/photo-1590080875831-9c9e6f0ad56d?auto=format&fit=crop&w=400&q=60", name: "Paneer 200 g Fresh", price: "₹89" },
    { img: "https://images.unsplash.com/photo-1626200869184-cc808ea37b1d?auto=format&fit=crop&w=400&q=60", name: "Brown Bread 400 g", price: "₹45" },
    { img: "https://images.unsplash.com/photo-1586201375761-83865001e17d?auto=format&fit=crop&w=400&q=60", name: "Bananas (6 pcs)", price: "₹49" },
  ];

  const [visibleCount, setVisibleCount] = useState(8);
  const loadMore = () => setVisibleCount((v) => v + 8);

  return (
    <div className="grocery-page">
      <header className="grocery-header">
        <h1>Grocery & Essentials</h1>
        <p>Everyday basics delivered fresh to your door.</p>
      </header>

      <section className="grocery-grid">
        {allProducts.slice(0, visibleCount).map((p, i) => (
          <div className="grocery-card" key={i}>
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

      <footer className="grocery-footer">
        <p>© 2025 Stackly Mart | Grocery & Essentials</p>
      </footer>
    </div>
  );
};

export default Grocery;
