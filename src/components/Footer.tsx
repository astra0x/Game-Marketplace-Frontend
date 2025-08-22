import React from 'react';
import { IoMdStar } from "react-icons/io";
import './Footer.css';
import Icon from './Icon';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="payment-methods">
          <div className="payment-logos">
            <img src="/assets/visa-svgrepo-com.svg" alt="VISA" className="payment-logo" style={{height: '110px'}} />
            <img src="/assets/mastercard-svgrepo-com.svg" alt="Mastercard" className="payment-logo" />
            <img src="/assets/amex-svgrepo-com.svg" alt="American Express" className="payment-logo" style={{height: '110px'}} />
            <img src="/assets/skrill-svgrepo-com.svg" alt="Skrill" className="payment-logo" style={{height: '30px'}} />
          </div>
          <div className='crypto-logos'>
            <img src="/assets/bitcoin-logo-svgrepo-com.svg" alt="Bitcoin" className="payment-logo crypto" />
            <img src='/assets/ethereum-svgrepo-com.svg' alt='Ethereum' className='payment-logo crypto' />
            <img src="/assets/litecoin-logo-svgrepo-com.svg" alt="Litecoin" className="payment-logo crypto" />
          </div>
          <div className="more-payments">
            <span>and 50+ more</span>
          </div>
        </div>

        <div className="social-media">
          <a href="#" className="social-link">
            <img src="/assets/facebook-3-logo-svgrepo-com.svg" alt="Facebook"/>
          </a>
          <a href="#" className="social-link">
            <img src="/assets/instagram-svgrepo-com.svg" alt="Instagram" />
          </a>
          <a href="#" className="social-link">
            <img src="/assets/twitter-3-logo-svgrepo-com.svg" alt="Twitter" />
          </a>
          <a href="#" className="social-link">
            <img src="/assets/discord-v2-svgrepo-com.svg" alt="Discord" />
          </a>
        </div>

        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/logo-footer.svg" alt="CHICKS GOLD" className="footer-logo-image" />
            </div>
            <p className="footer-email">support@chicksgold.com</p>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Chicks Gold</h3>
            <ul className="footer-links">
              <li><a href="#">Games</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Support</h3>
            <ul className="footer-links">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Legal</h3>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Copyright Policy</a></li>
            </ul>
          </div>

          <div className="trustpilot-section">
            <div className="trustpilot-bar">
              <div className="stars">
                <Icon icon={IoMdStar} />
                <Icon icon={IoMdStar} />
                <Icon icon={IoMdStar} />
                <Icon icon={IoMdStar} />
                <Icon icon={IoMdStar} />
              </div>
              <span className="trustpilot-text">Trustpilot Reviews</span>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>© 2017 - 2020 ChicksGold.com. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
