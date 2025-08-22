import React, { useState, useRef, useEffect } from 'react';
import './Header.css';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import Icon from './Icon';
import { IoIosArrowDown } from "react-icons/io";

const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isHoveringNav, setIsHoveringNav] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (dropdownName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsHoveringNav(dropdownName);
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = (dropdownName: string) => {
    setIsHoveringNav(null);
    if (activeDropdown === dropdownName) {
      timeoutRef.current = setTimeout(() => {
        setActiveDropdown(null);
      }, 200);
    }
  };

  const handleDropdownMouseEnter = (dropdownName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(dropdownName);
  };

  const handleDropdownMouseLeave = () => {
    if (!isHoveringNav) {
      timeoutRef.current = setTimeout(() => {
        setActiveDropdown(null);
      }, 200);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/chicks-logo-large.svg" alt="CHICKS GOLD" className="logo-image" />
        </div>
        
        <div className="logo-separator"></div>
        
        <nav className="navigation">
          <ul className="nav-list">
            <li 
              className="nav-item"
              onMouseEnter={() => handleMouseEnter('currency')}
              onMouseLeave={() => handleMouseLeave('currency')}
            >
              <a href="#" className="nav-link">
                CURRENCY <span className={`dropdown-arrow ${activeDropdown === 'currency' ? 'active' : ''}`}><Icon icon={IoIosArrowDown} style={{fontSize: '0.8rem'}}/></span>
              </a>
              {activeDropdown === 'currency' && (
                <div 
                  className="dropdown-menu currency-dropdown"
                  onMouseEnter={() => handleDropdownMouseEnter('currency')}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <a href="#" className="dropdown-item">USD - US Dollar</a>
                  <a href="#" className="dropdown-item">EUR - Euro</a>
                  <a href="#" className="dropdown-item">GBP - British Pound</a>
                  <a href="#" className="dropdown-item">CAD - Canadian Dollar</a>
                  <a href="#" className="dropdown-item">AUD - Australian Dollar</a>
                </div>
              )}
            </li>
            <li 
              className="nav-item"
              onMouseEnter={() => handleMouseEnter('items')}
              onMouseLeave={() => handleMouseLeave('items')}
            >
              <a href="#" className="nav-link">
                ITEMS <span className={`dropdown-arrow ${activeDropdown === 'items' ? 'active' : ''}`}><Icon icon={IoIosArrowDown} style={{fontSize: '0.8rem'}}/></span>
              </a>
              {activeDropdown === 'items' && (
                <div 
                  className="dropdown-menu items-dropdown"
                  onMouseEnter={() => handleDropdownMouseEnter('items')}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <a href="#" className="dropdown-item">RuneScape Items</a>
                  <a href="#" className="dropdown-item">World of Warcraft Items</a>
                  <a href="#" className="dropdown-item">Final Fantasy XIV Items</a>
                  <a href="#" className="dropdown-item">EVE Online Items</a>
                  <a href="#" className="dropdown-item">Dota 2 Items</a>
                </div>
              )}
            </li>
            <li 
              className="nav-item"
              onMouseEnter={() => handleMouseEnter('accounts')}
              onMouseLeave={() => handleMouseLeave('accounts')}
            >
              <a href="#" className="nav-link">
                ACCOUNTS <span className={`dropdown-arrow ${activeDropdown === 'accounts' ? 'active' : ''}`}><Icon icon={IoIosArrowDown} style={{fontSize: '0.8rem'}}/></span>
              </a>
              {activeDropdown === 'accounts' && (
                <div 
                  className="dropdown-menu accounts-dropdown"
                  onMouseEnter={() => handleDropdownMouseEnter('accounts')}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <a href="#" className="dropdown-item">RuneScape Accounts</a>
                  <a href="#" className="dropdown-item">WoW Accounts</a>
                  <a href="#" className="dropdown-item">FFXIV Accounts</a>
                  <a href="#" className="dropdown-item">EVE Accounts</a>
                  <a href="#" className="dropdown-item">Steam Accounts</a>
                </div>
              )}
            </li>
            <li 
              className="nav-item"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={() => handleMouseLeave('services')}
            >
              <a href="#" className="nav-link">
                SERVICES <span className={`dropdown-arrow ${activeDropdown === 'services' ? 'active' : ''}`}><Icon icon={IoIosArrowDown} style={{fontSize: '0.8rem'}}/></span>
              </a>
              {activeDropdown === 'services' && (
                <div 
                  className="dropdown-menu services-dropdown"
                  onMouseEnter={() => handleDropdownMouseEnter('services')}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <a href="#" className="dropdown-item">Power Leveling</a>
                  <a href="#" className="dropdown-item">Quest Completion</a>
                  <a href="#" className="dropdown-item">Dungeon Runs</a>
                  <a href="#" className="dropdown-item">Raid Carries</a>
                  <a href="#" className="dropdown-item">Character Boost</a>
                </div>
              )}
            </li>
            <li 
              className="nav-item"
              onMouseEnter={() => handleMouseEnter('swap')}
              onMouseLeave={() => handleMouseLeave('swap')}
            >
              <a href="#" className="nav-link">
                SWAP <span className={`dropdown-arrow ${activeDropdown === 'swap' ? 'active' : ''}`}><Icon icon={IoIosArrowDown} style={{fontSize: '0.8rem'}}/></span>
              </a>
              {activeDropdown === 'swap' && (
                <div 
                  className="dropdown-menu swap-dropdown"
                  onMouseEnter={() => handleDropdownMouseEnter('swap')}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <a href="#" className="dropdown-item">Game Currency Swap</a>
                  <a href="#" className="dropdown-item">Account Swap</a>
                  <a href="#" className="dropdown-item">Item Swap</a>
                  <a href="#" className="dropdown-item">Cross-Game Trading</a>
                  <a href="#" className="dropdown-item">Swap Rates</a>
                </div>
              )}
            </li>
            <li 
              className="nav-item"
              onMouseEnter={() => handleMouseEnter('sell')}
              onMouseLeave={() => handleMouseLeave('sell')}
            >
              <a href="#" className="nav-link">
                SELL <span className={`dropdown-arrow ${activeDropdown === 'sell' ? 'active' : ''}`}><Icon icon={IoIosArrowDown} style={{fontSize: '0.8rem'}}/></span>
              </a>
              {activeDropdown === 'sell' && (
                <div 
                  className="dropdown-menu sell-dropdown"
                  onMouseEnter={() => handleDropdownMouseEnter('sell')}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <a href="#" className="dropdown-item">Sell Items</a>
                  <a href="#" className="dropdown-item">Sell Accounts</a>
                  <a href="#" className="dropdown-item">Sell Services</a>
                  <a href="#" className="dropdown-item">Become a Seller</a>
                  <a href="#" className="dropdown-item">Seller Dashboard</a>
                </div>
              )}
            </li>
          </ul>
        </nav>
        
        <div className="user-controls">
          <div 
            className="currency-selector"
            onMouseEnter={() => handleMouseEnter('user-currency')}
            onMouseLeave={() => handleMouseLeave('user-currency')}
          >
            <span>USD</span>
            <span className={`dropdown-arrow ${activeDropdown === 'user-currency' ? 'active' : ''}`}><Icon icon={IoIosArrowDown} style={{fontSize: '0.8rem'}}/></span>
            {activeDropdown === 'user-currency' && (
              <div 
                className="dropdown-menu user-currency-dropdown"
                onMouseEnter={() => handleDropdownMouseEnter('user-currency')}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <a href="#" className="dropdown-item">USD - US Dollar</a>
                <a href="#" className="dropdown-item">EUR - Euro</a>
                <a href="#" className="dropdown-item">GBP - British Pound</a>
                <a href="#" className="dropdown-item">CAD - Canadian Dollar</a>
                <a href="#" className="dropdown-item">AUD - Australian Dollar</a>
              </div>
            )}
          </div>
          <div className="cart">
            <Icon icon={FaShoppingCart}  />
            <span>CART (5)</span>
          </div>
          <button className="sign-in-btn">
            SIGN IN
            <Icon icon={FaUser} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
