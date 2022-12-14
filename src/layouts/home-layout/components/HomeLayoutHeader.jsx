import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { logoutAction } from "../../../stores/slices";
import { FaShoppingCart } from "react-icons/fa";
import { ROUTE } from "../../../constants";

function HomeLayoutHeader() {
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.user.userInfoState.data);
  const dispatch = useDispatch();

  const gotoLoginPage = () => {
    navigate(ROUTE.login);
  };

  const onLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <div className="HomeLayoutHeader">
     <div className="contaier-header">
      <div className="header">
        <div className="logo">
          <a href="logo">
            <img
              className="logos"
              src={require("../../../assets/images/Plantiful Garden Logo.gif")}
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
          <div className="header-login" onClick={gotoLoginPage}>
            LOGIN
          </div>
          <h3 className="cart">
            {" "}
            <FaShoppingCart />
          </h3>
        </div>
      </div>
    </div>



      {/* <div>Header</div>
      {userInfo && <div>{userInfo.email}</div>}
      {userInfo === null ? (
        <button onClick={gotoLoginPage}>GO TO LOGIN PAGE</button>
      ) : (
        <button onClick={onLogout}>Logout</button>
      )} */}



    </div>
  );
}

export default HomeLayoutHeader;
