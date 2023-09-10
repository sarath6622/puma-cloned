import './Header.css';
import { FaHeart,FaShoppingCart,FaUserAlt,FaSearch } from "react-icons/fa";

function Header() {
  return (
    <div className="Header">
      <header className="header">

      <div className="links">
      <ul>
            <li><a href="https://in.puma.com/">New & Trending</a></li>
            <li><a href="https://in.puma.com/">Women</a></li>
            <li><a href="https://in.puma.com/">Menss</a></li>
            <li><a href="https://in.puma.com/">Kids & Teen</a></li>
            <li><a href="https://in.puma.com/">Motor Sport</a></li>
            <li><a href="https://in.puma.com/">Collaboration</a></li>
            <li><a href="https://in.puma.com/">Sports</a></li>
            <li><a href="https://in.puma.com/">Outlets</a></li>
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
