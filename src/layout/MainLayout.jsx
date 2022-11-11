import Footer from "../components/footer/Footer";
import HeaderSlider from "../components/header-slider/HeaderSlider";
import Header from "../components/header/Header";
import LoginCustomer from "../components/login/LoginCustomer";
import Register from "../components/register/Register";


function MainLayout() {
  return (
    <div className="layout">
      {/* <Header /> */}
      {/* <LoginCustomer /> */}
      <Register />
      <Footer />
    </div>
  );
}

export default MainLayout;
