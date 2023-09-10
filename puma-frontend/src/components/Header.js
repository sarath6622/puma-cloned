import './Header.css';
import { FaHeart,FaShoppingCart,FaUserAlt,FaSearch } from "react-icons/fa";
import Popup from './Popup.js';
import PopupContent from './PopupComponents/PopupContent';


function Header() {
  return (
    <div className="Header">
      <header>

      <div className="links">
      <ul>
            <li><Popup linkText="New & Trending" popupContent={<PopupContent />} /></li>
            <li><Popup linkText="Men" popupContent={<PopupContent />} /></li>
            <li><Popup linkText="Women" popupContent={<PopupContent />} /></li>
            <li><Popup linkText="Kids & Teen" popupContent={<PopupContent />} /></li>
            <li><Popup linkText="Motor Sport" popupContent={<PopupContent />} /></li>
            <li><Popup linkText="Collaboration" popupContent={<PopupContent />} /></li>
            <li><Popup linkText="Sports" popupContent={<PopupContent />} /></li>
            <li><Popup linkText="Outlets" popupContent={<PopupContent />} /></li>

        </ul>
      </div>
      <div className="login">
            <div class="search-container">
                <form>
                    <div class="input-container">
                        <input type="text" placeholder="Search" class="search-input" />
                        <button type="submit" class="search-button">
                        <FaSearch color='white'/>

                        </button>
                    </div>
                </form>
            </div>

        <FaHeart color='white'/>
        <FaShoppingCart color='white'/>
        <FaUserAlt color='white'/>
      </div>
        

      </header>
    </div>
  );
}

export default Header;
