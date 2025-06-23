
import { Logolink } from "../utils/content";



const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img
          className="logo"
          src={Logolink}
          alt="Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;