import React, { useEffect, useState } from "react";
import "../styles/home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate(); // ✅ keep it here — inside the function only

  const banners = [
    "banner1.jpg",
    "banner2.jpg",
    "banner3.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="home">
      {/* 🔷 HERO BANNER */}
      <section className="hero">
        {banners.map((url, i) => (
          <img key={i} src={url} alt={`banner-${i}`} className={i === index ? "active" : ""} />
        ))}
      </section>

      {/* 🔷 CATEGORY STRIP */}
      <section className="categories">
        <div className="category" onClick={() => navigate("/category/fashion")}>
          <img
            src="fashion.webp"
            alt="fashion"
          />
          <h3>Fashion</h3>
        </div>
        <div className="category" onClick={() => navigate("/category/electronics")}>
          <img
            src="electronics.avif"
            alt="electronics"
          />
          <h3>Electronics</h3>
        </div>
        <div className="category" onClick={() => navigate("/category/Appliances")}>
          <img
            src="tv.webp"
            alt="appliances"
          />
          <h3>TV & Appliances</h3>
        </div>
        <div className="category" onClick={() => navigate("/category/Beauty")}>
          <img
            src="beauty.webp"
            alt="beauty"
          />
          <h3>Beauty</h3>
        </div>
      </section>

      {/* 🔥 HOT DEALS */}
      <section className="hot-deals">
        <h2>🔥 Hot Deals of the Day</h2>
        <div className="deal-list">
          {[
            {
              img: "",
              name: "Wireless Earbuds",
              price: "₹899",
            },
            {
              img: "https://images.unsplash.com/photo-1602810318383-e3874cb3a30c?auto=format&fit=crop&w=400&q=60",
              name: "Smartwatch",
              price: "₹1,499",
            },
            {
              img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=60",
              name: "Men’s Sneakers",
              price: "₹2,199",
            },
            {
              img: "https://images.unsplash.com/photo-1561715276-a2d0bda6e8f9?auto=format&fit=crop&w=400&q=60",
              name: "LED TV 43 inch",
              price: "₹18,999",
            },
          ].map((d, i) => (
            <div key={i} className="deal">
              <img src={d.img} alt={d.name} />
              <p>{d.name}</p>
              <span>{d.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 💥 OFFER SECTION */}
      <section className="offers">
        <h2>💥 Trending Offers</h2>
        <div className="offer-list">
          {[
            "boat.jpg",
            "boult.jpg",
            "noise.jpg",
            "zebronics.jpg",
          ].map((url, i) => (
            <div key={i} className="offer-card">
              <img src={url} alt="offer" />
            </div>
          ))}
        </div>
      </section>

      {/* 🦶 FOOTER */}
      <footer className="footer">
        <p>© 2025 Stackly Mart | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Home;
