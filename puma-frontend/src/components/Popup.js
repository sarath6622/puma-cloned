import React, { useState } from 'react';
import './Popup.css';

function Popup({ linkText, popupContent }) {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div className="container" onMouseEnter={togglePopup} onMouseLeave={togglePopup}>
      <a href="#" className="link">
        {linkText}
      </a>
      {isPopupVisible && <div className="popup">{popupContent}</div>}
    </div>
  );
}

export default Popup;
