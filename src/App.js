import "./App.css";
import MainLayout from "./layout/MainLayout";
import { ROUTE } from "./constants";
import { Route, Routes } from "react-router";
import Header from "./components/header/Header";
import LoginCustomer from "./components/login/LoginCustomer";
import { BrowserRouter } from "react-router-dom";
import HomeLayout from "./layouts/home-layout/HomeLayout";
import HomePage from "./pages/homepage/HomePage";
import FullLayout from "./layouts/full-layout/FullLayout";
import { ProtectedRoute } from "./router/ProtectedRoute";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          {/* Customer Router */}
          <Route
            path={ROUTE.home}
            element={<HomeLayout content={<HomePage />} />}
          />
          <Route
            path={ROUTE.productDetail}
            element={<HomeLayout content={<div></div>} />}
          />
          <Route
            path={ROUTE.login}
            element={<FullLayout content={<LoginCustomer />} />}
          />

          {/* Protected Router */}
          {/* <Route
            path={ROUTE.cart}
            element={
              <HomeLayout
                content={
                  <ProtectedRoute>
                    <CartPage />
                  </ProtectedRoute>
                }
              />
            }
          /> */}

          {/* Staff Router */}
          {/* <Route
            path={"/staff/product"}
            element={
              <HomeLayout
                content={
                  <ProtectedRoute>
                    <CartPage />
                  </ProtectedRoute>
                }
              />
            } */}
          {/* /> */}
          {/* <Route
            path={"/staff/order"}
            element={
              <HomeLayout
                content={
                  <ProtectedRoute>
                    <CartPage />
                  </ProtectedRoute>
                }
              />
            }
          /> */}

          {/* Admin */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
