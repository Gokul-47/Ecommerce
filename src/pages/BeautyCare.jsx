import React, { useState } from "react";
import "../styles/beautyCare.css";

const BeautyCare = () => {
  const allProducts = [
    { img: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba3?auto=format&fit=crop&w=400&q=60", name: "L’Oréal Paris Shampoo 650ml", price: "₹499" },
    { img: "https://images.unsplash.com/photo-1596464716121-3e0b3b84f09f?auto=format&fit=crop&w=400&q=60", name: "Nivea Body Lotion 400ml", price: "₹349" },
    { img: "https://images.unsplash.com/photo-1585386959984-a41552231693?auto=format&fit=crop&w=400&q=60", name: "Maybelline Fit Me Foundation", price: "₹549" },
    { img: "https://images.unsplash.com/photo-1589987607627-1cdecbc25d49?auto=format&fit=crop&w=400&q=60", name: "Lakmé Eye Liner 9 ml", price: "₹199" },
    { img: "https://images.unsplash.com/photo-1615184432393-4c74d1a1eaa6?auto=format&fit=crop&w=400&q=60", name: "Beardo Beard Oil 50ml", price: "₹299" },
    { img: "https://images.unsplash.com/photo-1620912189862-6b60e1f3e383?auto=format&fit=crop&w=400&q=60", name: "Mamaearth Face Wash 150ml", price: "₹249" },
    { img: "https://images.unsplash.com/photo-1613553507745-6a22dbf2460f?auto=format&fit=crop&w=400&q=60", name: "Nykaa Lipstick Matte", price: "₹299" },
    { img: "https://images.unsplash.com/photo-1574174465958-bf6e7b0b8b04?auto=format&fit=crop&w=400&q=60", name: "Dove Conditioner 180 ml", price: "₹199" },
    { img: "https://images.unsplash.com/photo-1620912189862-6b60e1f3e383?auto=format&fit=crop&w=400&q=60", name: "Mamaearth Ubtan Scrub", price: "₹349" },
    { img: "https://images.unsplash.com/photo-1585386959984-a41552231693?auto=format&fit=crop&w=400&q=60", name: "Maybelline Mascara", price: "₹449" },
    { img: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba3?auto=format&fit=crop&w=400&q=60", name: "L’Oréal Hair Serum", price: "₹499" },
    { img: "https://images.unsplash.com/photo-1613553507745-6a22dbf2460f?auto=format&fit=crop&w=400&q=60", name: "Nykaa Nail Paint", price: "₹149" },
    { img: "https://images.unsplash.com/photo-1615184432393-4c74d1a1eaa6?auto=format&fit=crop&w=400&q=60", name: "Beardo Hair Wax Strong Hold", price: "₹249" },
    { img: "https://images.unsplash.com/photo-1589987607627-1cdecbc25d49?auto=format&fit=crop&w=400&q=60", name: "Lakmé Compact Powder", price: "₹249" },
    { img: "https://images.unsplash.com/photo-1596464716121-3e0b3b84f09f?auto=format&fit=crop&w=400&q=60", name: "Nivea Men Deo Spray", price: "₹199" },
    { img: "https://images.unsplash.com/photo-1620912189862-6b60e1f3e383?auto=format&fit=crop&w=400&q=60", name: "Mamaearth Hair Mask 200ml", price: "₹399" },
    { img: "https://images.unsplash.com/photo-1589987607627-1cdecbc25d49?auto=format&fit=crop&w=400&q=60", name: "Lakmé Primer + Matte", price: "₹499" },
    { img: "https://images.unsplash.com/photo-1613553507745-6a22dbf2460f?auto=format&fit=crop&w=400&q=60", name: "Nykaa Compact Mirror", price: "₹99" },
    { img: "https://images.unsplash.com/photo-1615184432393-4c74d1a1eaa6?auto=format&fit=crop&w=400&q=60", name: "Beardo Beard Comb", price: "₹149" },
    { img: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba3?auto=format&fit=crop&w=400&q=60", name: "L’Oréal Men Expert Face Wash", price: "₹299" },
  ];

  const [visibleCount, setVisibleCount] = useState(8);
  const loadMore = () => setVisibleCount(v => v + 8);

  return (
    <div className="beauty-page">
      <header className="beauty-header">
        <h1>Beauty & Personal Care</h1>
        <p>Look good, feel great — premium self-care essentials.</p>
      </header>

      <section className="beauty-grid">
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

      <footer className="beauty-footer">
        <p>© 2025 Stackly Mart | Beauty & Personal Care</p>
      </footer>
    </div>
  );
};

export default BeautyCare;
