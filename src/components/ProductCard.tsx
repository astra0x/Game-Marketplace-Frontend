import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { GiSatelliteCommunication, GiStiletto, GiFeather, GiSettingsKnobs } from "react-icons/gi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { TbMoneybag } from "react-icons/tb";
import { IconType } from "react-icons";
import "./ProductCard.css";
import Icon from "./Icon";

interface Product {
  id: number;
  name: string;
  originalPrice: number;
  currentPrice: number;
  onSale: boolean;
  inStock: boolean;
  description: string;
  image: string;
  gameIcon: string;
}

interface ProductCardProps {
  product: Product;
}

const iconMap: { [key: string]: IconType } = {
  'GiSatelliteCommunication': GiSatelliteCommunication,
  'GiStiletto': GiStiletto,
  'GiFeather': GiFeather,
  'GiSettingsKnobs': GiSettingsKnobs,
  'TbMoneybag': TbMoneybag,
  'FaShoppingCart': FaShoppingCart,
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (increment: boolean) => {
    if (increment) {
      setQuantity((prev) => prev + 1);
    } else if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const GameIconComponent = iconMap[product.gameIcon] || GiSatelliteCommunication;

  return (
    <div className="product-card">
      <div className="card-header">
        <div className="card-header-left">
          <div
            className="sale-badge"
            style={{ visibility: product.onSale ? "visible" : "hidden" }}
          >
            <span className="sale-dot"></span>
            ON SALE
          </div>
          <div className="stock-status">
            <span
              className="in-stock"
              style={{ visibility: product.inStock ? "visible" : "hidden" }}
            >
              In stock
            </span>
          </div>
        </div>
        <div className="quantity-selector">
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            min="1"
            className="quantity-input"
          />
          <div className="quantity-arrows">
            <button
              className="quantity-arrow"
              onClick={() => handleQuantityChange(true)}
            >
              <Icon icon={IoMdArrowDropup} style={{fontSize: '1.2rem'}}/>
            </button>
            <button
              className="quantity-arrow"
              onClick={() => handleQuantityChange(false)}
            >
              <Icon icon={IoMdArrowDropdown} style={{fontSize: '1.2rem'}}/>
            </button>
          </div>
        </div>
      </div>

      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <div className="product-header">
          <h3 className="product-name">{product.name}</h3>
          <div className="game-icon">
            <Icon icon={GameIconComponent} style={{fontSize: "1rem"}} />
          </div>
        </div>

        <div
          className="product-pricing"
          style={{ visibility: product.onSale ? "visible" : "hidden" }}
        >
          <span className="current-price">
            ${product.currentPrice.toFixed(2)}
          </span>
          <span className="original-price">
            ${product.originalPrice.toFixed(2)}
          </span>
        </div>

        <p className="product-description">{product.description}</p>
      </div>

      <div className="card-actions">
        <button className="details-btn">DETAILS</button>
        <button className="add-btn">
          ADD{" "}
          <div className="btn-icon">
            <Icon icon={FaShoppingCart} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
