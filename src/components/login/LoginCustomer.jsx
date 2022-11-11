import "./LoginCustomer.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../header/Header";

function LoginCustomer() {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [password, setPassword] = useState();

  const handleLoginUser = (e) => {
    e.preventDefault();

    const newUser = {
      user,
      password,
    };
  };

  return (
    <div className="container-login">
      <Header />
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card my-5">
            <form class="card-body p-lg-5">
              <h2 class="login">Login</h2>
              <div className="text-center">
                <img
                  src={require("../../assets/images/Plantiful Garden Logo.gif")}
                  class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                  width="200px"
                  alt="profile"
                />
              </div>
              <div className=" input-login">
                <input
                  type="text"
                  class="form-control"
                  id="Username"
                  aria-describedby="emailHelp"
                  placeholder="User Name"
                  onClick={(e) => {}}
                  onChange={(e) => {
                    setUser(e.target.value);
                  }}
                />
                {/* </div>
              <div class="mb-3"> */}
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="password"
                  onClick={(e) => {}}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div class="text-center">
                <button
                  type="submit"
                  class="bt-login"
                  onChange={handleLoginUser}
                >
                  Login
                </button>
              </div>
              <div id="emailHelp" class="form-text text-center mb-5 text-dark">
                Not Registered?{" "}
                <a href="#" class="text-dark fw-bold">
                  {" "}
                  Create an Account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginCustomer;
