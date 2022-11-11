import "./Header.scss";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router";
import { ROUTE } from "../../constants";
import HeaderSlider from "../header-slider/HeaderSlider";

function Header() {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    navigate(ROUTE.login);
  };

  return (
    <div className="contaier-header">
      <div className="header">
        <div className="logo">
          <a href="logo">
            <img
              className="logos"
              src={require("../../assets/images/Plantiful Garden Logo.gif")}
              alt=""
            />
          </a>
        </div>
        <div className="header-list">
          <input type="text" placeholder="Search..." />
          <a href="">HOME</a>
          <a href="">SHOP</a>
          <a href="">ABOUT US</a>
          <a href="">CONTACT</a>
        </div>
        <div className="header-customer">
          <div className="header-login" onClick={handleLogin}>
            LOGIN
          </div>
          <h3 className="cart">
            {" "}
            <FaShoppingCart />
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Header;
