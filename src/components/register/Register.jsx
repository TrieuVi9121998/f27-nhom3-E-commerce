import Header from "../header/Header";
import "./Register.scss";

function Register() {
  return (
    <div>
      <Header />
      <div class="container">
        <div class="card">
          <h2 class="card-title text-center">Register</h2>
          <div class="card-body py-md-4">
            <form _lpchecked="1">
              <div className="">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Name"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Email"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    id="confirm-password"
                    placeholder="Confirm-password"
                  />
                </div>
              </div>
              <div class="d-flex flex-row align-items-center justify-content-between">
                <button class="btn-login">Login</button>
                <button class="btn-register btn-primary">Create Account</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
