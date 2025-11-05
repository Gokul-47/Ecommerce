import React, { useState } from "react";
import "../styles/tvAppliances.css";

const TvAppliances = () => {
  const allProducts = [
    { img: "https://images.unsplash.com/photo-1583225323685-5b0d4a99044d?auto=format&fit=crop&w=400&q=60", name: "Samsung 43'' Smart LED TV", price: "₹26,999" },
    { img: "https://images.unsplash.com/photo-1593784991095-7015b540d0de?auto=format&fit=crop&w=400&q=60", name: "LG 55'' 4K Ultra HD TV", price: "₹42,499" },
    { img: "https://images.unsplash.com/photo-1592991572456-6c315f1e0c93?auto=format&fit=crop&w=400&q=60", name: "Haier Refrigerator (250 L)", price: "₹19,999" },
    { img: "https://images.unsplash.com/photo-1606813902774-d7d8d6f7d2b4?auto=format&fit=crop&w=400&q=60", name: "Microwave Oven 20 L", price: "₹6,499" },
    { img: "https://images.unsplash.com/photo-1611078489935-0cb964de46d5?auto=format&fit=crop&w=400&q=60", name: "Front-Load Washing Machine", price: "₹24,999" },
    { img: "https://images.unsplash.com/photo-1576871337622-98ec85b5bb0e?auto=format&fit=crop&w=400&q=60", name: "Air Conditioner 1.5 Ton Split", price: "₹32,999" },
    { img: "https://images.unsplash.com/photo-1583225131261-39e65f77a3b3?auto=format&fit=crop&w=400&q=60", name: "Sound Bar System 300 W", price: "₹8,999" },
    { img: "https://images.unsplash.com/photo-1581539230902-b73b0e2c0f0e?auto=format&fit=crop&w=400&q=60", name: "Electric Iron Box", price: "₹999" },
    { img: "https://images.unsplash.com/photo-1563213126-a4273aed2016?auto=format&fit=crop&w=400&q=60", name: "Mixer Grinder 750 W", price: "₹3,299" },
    { img: "https://images.unsplash.com/photo-1593970302709-06c19a4b26a4?auto=format&fit=crop&w=400&q=60", name: "Air Cooler 35 L", price: "₹6,999" },
    { img: "https://images.unsplash.com/photo-1583522182048-44e4a50a2d0d?auto=format&fit=crop&w=400&q=60", name: "Home Theater System 5.1", price: "₹12,499" },
    { img: "https://images.unsplash.com/photo-1580894894513-3443ef5f3795?auto=format&fit=crop&w=400&q=60", name: "Electric Kettle 1.5 L", price: "₹899" },
    { img: "https://images.unsplash.com/photo-1616627798747-95b452b20d54?auto=format&fit=crop&w=400&q=60", name: "Vacuum Cleaner", price: "₹5,799" },
    { img: "https://images.unsplash.com/photo-1573523140057-46e9e6b8f450?auto=format&fit=crop&w=400&q=60", name: "Toaster 2 Slice", price: "₹1,199" },
    { img: "https://images.unsplash.com/photo-1556906781-9e911dcd17d3?auto=format&fit=crop&w=400&q=60", name: "Ceiling Fan 1200 mm", price: "₹2,499" },
    { img: "https://images.unsplash.com/photo-1606813902774-d7d8d6f7d2b4?auto=format&fit=crop&w=400&q=60", name: "Microwave Oven 32 L", price: "₹9,499" },
    { img: "https://images.unsplash.com/photo-1593970302709-06c19a4b26a4?auto=format&fit=crop&w=400&q=60", name: "Air Cooler 50 L Desert Model", price: "₹9,999" },
    { img: "https://images.unsplash.com/photo-1598702235272-c2b88c949b6a?auto=format&fit=crop&w=400&q=60", name: "Induction Cooktop 2000 W", price: "₹2,399" },
    { img: "https://images.unsplash.com/photo-1616627798747-95b452b20d54?auto=format&fit=crop&w=400&q=60", name: "Dishwasher 13 Place", price: "₹37,999" },
    { img: "https://images.unsplash.com/photo-1576871337622-98ec85b5bb0e?auto=format&fit=crop&w=400&q=60", name: "Portable Air Purifier", price: "₹6,499" },
  ];

  const [visibleCount, setVisibleCount] = useState(8);
  const loadMore = () => setVisibleCount((v) => v + 8);

  return (
    <div className="tvappliances">
      <header className="tv-header">
        <h1>TV & Home Appliances</h1>
        <p>Upgrade your home with the best smart appliances and entertainment systems.</p>
      </header>

      <section className="tv-grid">
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

      <footer className="tv-footer">
        <p>© 2025 Stackly Mart | TV & Appliances Division</p>
      </footer>
    </div>
  );
};

export default TvAppliances;
