import React from 'react';
import { GiStiletto, GiSettingsKnobs, GiFeather } from "react-icons/gi";
import { FaSearchengin } from "react-icons/fa";
import { TbMoneybag } from "react-icons/tb";
import { IoIosArrowBack, IoIosArrowForward, IoMdArrowDropdown } from "react-icons/io";

import './MainContent.css';
import ProductCard from './ProductCard';
import Icon from './Icon';


const MainContent: React.FC = () => {
  const products = [
    {
      id: 1,
      name: "Blue Partyhat",
      originalPrice: 522,
      currentPrice: 450.00,
      onSale: true,
      inStock: true,
      description: "Lorem ipsum dolor sit amet consetetur sadipscing elitr.",
      image: "/assets/image (1).jpg",
      gameIcon: "GiSatelliteCommunication"
    },
    {
      id: 2,
      name: "Red Partyhat",
      originalPrice: 480.00,
      currentPrice: 420.00,
      onSale: true,
      inStock: true,
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      image: "/assets/image (2).jpg",
      gameIcon: "GiSatelliteCommunication"
    },
    {
      id: 3,
      name: "Grey Armor Set",
      originalPrice: 350.00,
      currentPrice: 350.00,
      onSale: false,
      inStock: true,
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      image: "/assets/image (3).jpg",
      gameIcon: "GiSatelliteCommunication"
    },
    {
      id: 4,
      name: "Dragon Scimitar",
      originalPrice: 280.00,
      currentPrice: 250.00,
      onSale: true,
      inStock: true,
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      image: "/assets/image (4).jpg",
      gameIcon: "GiSatelliteCommunication"
    },
    {
      id: 5,
      name: "Abyssal Whip",
      originalPrice: 320.00,
      currentPrice: 320.00,
      onSale: false,
      inStock: true,
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      image: "/assets/image (5).jpg",
      gameIcon: "GiSatelliteCommunication"
    },
    {
      id: 6,
      name: "Bandos Chestplate",
      originalPrice: 450.00,
      currentPrice: 400.00,
      onSale: true,
      inStock: true,
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      image: "/assets/image (1).jpg",
      gameIcon: "GiSatelliteCommunication"
    },
    {
      id: 7,
      name: "Sara Godsword",
      originalPrice: 380.00,
      currentPrice: 380.00,
      onSale: false,
      inStock: true,
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      image: "/assets/image (2).jpg",
      gameIcon: "GiSatelliteCommunication"
    },
    {
      id: 8,
      name: "Dragon Boots",
      originalPrice: 120.00,
      currentPrice: 100.00,
      onSale: true,
      inStock: true,
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      image: "/assets/image (3).jpg",
      gameIcon: "GiSatelliteCommunication"
    },
    {
      id: 9,
      name: "Ranger Boots",
      originalPrice: 180.00,
      currentPrice: 180.00,
      onSale: false,
      inStock: true,
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      image: "/assets/image (4).jpg",
      gameIcon: "GiSatelliteCommunication"
    },
    {
      id: 10,
      name: "Fury Amulet",
      originalPrice: 220.00,
      currentPrice: 200.00,
      onSale: true,
      inStock: true,
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      image: "/assets/image (5).jpg",
      gameIcon: "GiSatelliteCommunication"
    },
    {
      id: 11,
      name: "Berserker Ring",
      originalPrice: 150.00,
      currentPrice: 150.00,
      onSale: false,
      inStock: true,
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      image: "/assets/image (1).jpg",
      gameIcon: "GiSatelliteCommunication"
    },
    {
      id: 12,
      name: "Archer Ring",
      originalPrice: 160.00,
      currentPrice: 140.00,
      onSale: true,
      inStock: true,
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      image: "/assets/image (2).jpg",
      gameIcon: "GiSatelliteCommunication"
    },
    {
      id: 13,
      name: "Seers Ring",
      originalPrice: 140.00,
      currentPrice: 140.00,
      onSale: false,
      inStock: true,
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      image: "/assets/image (4).jpg",
      gameIcon: "GiSatelliteCommunication"
    },
    {
      id: 14,
      name: "Warrior Ring",
      originalPrice: 130.00,
      currentPrice: 110.00,
      onSale: true,
      inStock: true,
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      image: "/assets/image (5).jpg",
      gameIcon: "GiSatelliteCommunication"
    },
    {
      id: 15,
      name: "Dragon Full Helm",
      originalPrice: 280.00,
      currentPrice: 280.00,
      onSale: false,
      inStock: true,
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      image: "/assets/image (1).jpg",
      gameIcon: "GiSatelliteCommunication"
    }
  ];

  return (
    <main className="main-content">
      <img className='background-image' src='/assets/background.jpg' alt='background' />
      <div className="main-container">
        <h1 className="page-title">Condimentum consectetur</h1>
        
        <div className="search-filters">
          <div className="game-selector">
            <span className="sword-icon"><Icon icon={GiStiletto} /></span>
            <select className="game-dropdown">
              <option>Select a game</option>
              <option>RuneScape</option>
              <option>RS 3</option>
              <option>Final Fantasy XIV</option>
            </select>
            <span className="dropdown-arrow"><Icon icon={IoMdArrowDropdown} style={{fontSize: '1.2rem'}}/></span>
          </div>
          
          <div className="search-bar">
            <span className="search-icon"><Icon icon={FaSearchengin} /></span>
            <input type="text" placeholder="Search" className="search-input" />
          </div>
          
          <div className="price-filter">
            <span className="price-icon"><Icon icon={TbMoneybag} /></span>
            <div className="filter-content">
              <div className="filter-label">Price</div>
              <div className="filter-value">
                <select className="price-dropdown">
                  <option>All</option>
                  <option>Under $100</option>
                  <option>$100 - $200</option>
                  <option>$200 - $500</option>
                  <option>Over $500</option>
                </select>
                <span className="dropdown-arrow"><Icon icon={IoMdArrowDropdown} style={{fontSize: '1.2rem'}}/></span>
              </div>
            </div>
          </div>
          
          <div className="item-type-filter">
            <span className="item-icon"><Icon icon={GiFeather} /></span>
            <div className="filter-content">
              <div className="filter-label">Item Type</div>
              <div className="filter-value">
                <select className="item-type-dropdown">
                  <option>All</option>
                  <option>Weapons</option>
                  <option>Armor</option>
                  <option>Accessories</option>
                  <option>Consumables</option>
                </select>
                <span className="dropdown-arrow"><Icon icon={IoMdArrowDropdown} style={{fontSize: '1.2rem'}}/></span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="products-section">
          <div className="products-header">
            <div className="results-info">
              <span>Showing 20 - from 125</span>
            </div>
            <div className="sort-controls">
              <span className="sort-icon"><Icon icon={GiSettingsKnobs} style={{color: "#4ade80"}} /></span>
              <div className="filter-content">
                <div className="filter-label">Sort By</div>
                <div className="filter-value">
                  <select className="sort-dropdown">
                    <option>Featured</option> 
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Name: A to Z</option>
                    <option>Name: Z to A</option>
                  </select>
                  <span className="dropdown-arrow"><Icon icon={IoMdArrowDropdown} style={{fontSize: '1.2rem'}}/></span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="products-grid">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        
        <div className="pagination">
          <button className="pagination-btn"><Icon icon={IoIosArrowBack} style={{fontSize: '1rem'}}/></button>
          <button className="pagination-btn active">1</button>
          <button className="pagination-btn">2</button>
          <button className="pagination-btn">3</button>
          <button className="pagination-btn">4</button>
          <span className="pagination-dots">...</span>
          <button className="pagination-btn">11</button>
          <button className="pagination-btn"><Icon icon={IoIosArrowForward} style={{fontSize: '1rem'}}/></button>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
