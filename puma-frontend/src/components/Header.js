import React, { useState } from 'react';
import './Header.css';
import { FaHeart, FaShoppingCart, FaUserAlt, FaSearch } from "react-icons/fa";
import linksData from './linksData';

function Header() {
  const [isLinkHovered, setLinkHovered] = useState(false);
  const [hoveredLinkData1, setHoveredLinkData1] = useState('');
  const [hoveredLinkData2, setHoveredLinkData2] = useState('');

  const handleLinkHover = (data1,data2) => {
    setLinkHovered(true);
    setHoveredLinkData1(data1);
    setHoveredLinkData2(data2);
  };

  const handleLinkLeave = () => {
    setLinkHovered(false);
  };


  return (
    <div className="Header">
      <header>
        <div className="links">
          <ul>
            {linksData.map((link) => (
              <li
              key={link.id}
                className={`hover-link ${isLinkHovered ? 'hovered' : ''}`}
                onMouseEnter={() => handleLinkHover(link.content,link.categories)}
                onMouseLeave={handleLinkLeave}>
                <a
                href="#"
                
              >
                {link.text}
              </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="login">
          <div className="search-container">
            <form>
              <div className="input-container">
                <input type="text" placeholder="Search" className="search-input" />
                <button type="submit" className="search-button">
                  <FaSearch color='black'/>
                </button>
              </div>
            </form>
          </div>
          <FaHeart color='white'/>
          <FaShoppingCart color='white'/>
          <FaUserAlt color='white'/>
        </div>
      </header>
      {isLinkHovered && (
        <div className={`div-to-display ${isLinkHovered ? 'visible' : ''}`}>
          <ul className='dropdown-content-main'>
            {hoveredLinkData1.map((contentItem, index) => (
              <a key={index} className="content-item">
                {contentItem}
              </a>
            ))}
            
          </ul>
          <div className='dropdown-content-right'>

              {hoveredLinkData2.map((category) => (
                <div key={category.name} className='dropdown-content-right-items'>
                  <div className='header-underline'>
                    <h3>{category.name}</h3>
                  </div>
                    <div className='subcategories'>
                      {category.subcategories.map((subcategory) => (
                        <li key={subcategory}>{subcategory}</li>
                      ))}
                    </div>
                </div>
              ))}

          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
