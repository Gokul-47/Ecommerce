import React from "react";
import "../styles/productDetails.css";

const ProductDetails = () => {
  const product = {
    id: 1,
    name: "Nike Air Zoom Sneakers",
    price: 4999,
    rating: 4.5,
    images: [
      "https://images.unsplash.com/photo-1528701800489-20be2e867c07?w=800",
      "https://images.unsplash.com/photo-1606813902779-cb25064b84c7?w=800",
      "https://images.unsplash.com/photo-1589187155478-2f7b6d2f0f7c?w=800",
    ],
    description:
      "Experience comfort and performance with Nike Air Zoom sneakers — lightweight design with modern cushioning technology.",
  };

  const recommendations = [
    {
      id: 2,
      name: "Adidas Ultraboost",
      image:
        "https://images.unsplash.com/photo-1589187155478-2f7b6d2f0f7c?w=400",
      price: 5999,
    },
    {
      id: 3,
      name: "Puma Sport Runner",
      image:
        "https://images.unsplash.com/photo-1606813902779-cb25064b84c7?w=400",
      price: 4499,
    },
    {
      id: 4,
      name: "Reebok Flex 3.0",
      image:
        "https://images.unsplash.com/photo-1528701800489-20be2e867c07?w=400",
      price: 4899,
    },
  ];

  return (
    <div className="product-details">
      <div className="details-container">
        <div className="image-gallery">
          {product.images.map((img, i) => (
            <img key={i} src={img} alt={product.name} />
          ))}
        </div>
        <div className="info">
          <h2>{product.name}</h2>
          <p className="price">₹{product.price}</p>
          <p className="rating">⭐ {product.rating} / 5</p>
          <p className="desc">{product.description}</p>
          <button className="add-cart">Add to Cart</button>
        </div>
      </div>

      <div className="recommendations">
        <h3>You may also like</h3>
        <div className="recommend-list">
          {recommendations.map((item) => (
            <div className="rec-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <p>₹{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
