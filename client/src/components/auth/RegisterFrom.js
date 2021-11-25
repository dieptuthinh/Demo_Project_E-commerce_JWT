import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import AlertMessage from "../AlertMessage";
import logo from "../../assets/images/products/product-05 (1).jpg";
import Button from "../Button";
import Helmet from "../Helmet";
import { useTranslation } from "react-i18next";



const RegisterForm = () => {
  // Context
  const { registerUser } = useContext(AuthContext);

  // Local state
  const [registerForm, setRegisterForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [alert, setAlert] = useState(null);

  const { username, email, password, confirmPassword } = registerForm;
const { t } = useTranslation();
  const onChangeRegisterForm = (event) =>
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value,
    });

  const register = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setAlert({ type: "danger", message: "Passwords do not match" });
      setTimeout(() => setAlert(null), 5000);
      return;
    }

    try {
      const registerData = await registerUser(registerForm);
      if (!registerData.success) {
        setAlert({ type: "danger", message: registerData.message });
        setTimeout(() => setAlert(null), 5000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Helmet title={t("registerTitle")}>
        <section className="vh-75 login-bg">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-xl-7">
                <div className="card mt-3">
                  <div className="row g-0">
                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                      <img
                        src={logo}
                        alt="login form"
                        className="img-fluid h-100"
                      />
                    </div>
                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                      <div className="card-body p-4 p-lg-5 text-black">
                        <form className="space-y-6" onSubmit={register}>
                          <AlertMessage info={alert} />
                          <div className="d-flex align-items-center mb-3 pb-1 login-icon">
                            <i className="bx bx-cube-alt mb-0"></i>
                            <span className="fw-bold mb-0">REGISTER</span>
                          </div>

                          <h5 className="fw-normal mb-3 pb-3">Sign up today</h5>
                          <div className="form-outline mb-4">
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              placeholder="Username"
                              name="username"
                              required
                              value={username}
                              onChange={onChangeRegisterForm}
                            />
                          </div>

                          <div className="form-outline mb-4">
                            <input
                              type="email"
                              className="form-control form-control-lg"
                              placeholder="Email"
                              name="email"
                              required
                              value={email}
                              onChange={onChangeRegisterForm}
                            />
                          </div>

                          <div className="form-outline mb-4">
                            <input
                              className="form-control form-control-lg"
                              type="password"
                              placeholder="Password"
                              name="password"
                              required
                              value={password}
                              onChange={onChangeRegisterForm}
                            />
                          </div>
                          <div className="form-outline mb-4">
                            <input
                              type="password"
                              className="form-control form-control-lg"
                              placeholder="Confirm Password"
                              name="confirmPassword"
                              required
                              value={confirmPassword}
                              onChange={onChangeRegisterForm}
                            />
                          </div>

                          <div className="pt-1 mb-4 d-grid ">
                            <Button size="sm" type="submit">
                              Sign up
                            </Button>
                          </div>

                          <Link className="small text-muted " to="/">
                            Forgot password?
                          </Link>
                          <p className="mb-5 pb-lg-2 ">
                            Already have an account?
                            <Link className="text-primary" to="/login">
                              Login here
                            </Link>
                          </p>
                          <Link to="/" className="small text-muted ">
                            Terms of use.
                          </Link>
                          <Link to="/" className="small text-muted ">
                            Privacy policy
                          </Link>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Helmet>
    </>
  );
};

export default RegisterForm;
