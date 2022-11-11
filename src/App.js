import "./App.css";
import MainLayout from "./layout/MainLayout";
import { ROUTE } from "./constants";
import { Route, Routes } from "react-router";
import Header from "./components/header/Header";
import LoginCustomer from "./components/login/LoginCustomer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route >
            {/* login */}
          <Route
            path={ROUTE.all}
            element={<MainLayout />}
          />
          <Route
          path={ROUTE.login}
          element={<LoginCustomer/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
