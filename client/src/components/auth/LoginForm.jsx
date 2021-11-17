import React from 'react'
import Helmet from '../Helmet';
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import AlertMessage from "../AlertMessage";
import Button from "../Button"
import logo from "../../assets/images/products/product-08 (1).jpg";
import { toast } from "react-toastify";
import Header from '../Header';

// import ilu from "../../assets/images/slider/illustrations.jpg";
// import gg from "../../assets/images/slider/google.png";
const LoginForm = () => {
    // Context
    const { loginUser } = useContext(AuthContext);

    // Local state
    const [loginForm, setLoginForm] = useState({
        username: "",
        password: "",
    });

    const [alert, setAlert] = useState(null);

    const { username, password } = loginForm;

    const onChangeLoginForm = (event) =>
        setLoginForm({ ...loginForm, [event.target.name]: event.target.value });

    const login = async (event) => {
        event.preventDefault();

        try {
            const loginData = await loginUser(loginForm);
            if (!loginData.success) {
                setAlert({ type: "danger", message: loginData.message });
                setTimeout(() => setAlert(null), 5000);
            }
            toast.success("Login successful", {
                position: toast.POSITION.BOTTOM_RIGHT
            });

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Header />
            <Helmet title="Auth">
                <section className="vh-100 login-bg">
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col col-xl-8">
                                <div className="card">
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
                                                <form
                                                    className="space-y-6"
                                                    onSubmit={login}
                                                >
                                                    <AlertMessage info={alert} />
                                                    <div className="d-flex align-items-center mb-3 pb-1 login-icon">
                                                        <i className="bx bxs-cube-alt mb-0" ></i>
                                                        <span className="fw-bold mb-0">LOGIN</span>
                                                    </div>

                                                    <h5 className="fw-normal mb-3 pb-3">
                                                        Sign into your account
                                                    </h5>

                                                    <div className="form-outline mb-4">
                                                        <input
                                                            className="form-control form-control-lg"
                                                            required
                                                            type="text"
                                                            placeholder="Username"
                                                            name="username"
                                                            value={username}
                                                            onChange={onChangeLoginForm}
                                                        />
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <input
                                                            type="password"
                                                            className="form-control form-control-lg"
                                                            placeholder="Password"
                                                            name="password"
                                                            required
                                                            value={password}
                                                            onChange={onChangeLoginForm}
                                                        />
                                                    </div>

                                                    <div className="pt-1 mb-4 d-grid">
                                                        <Button
                                                            size="sm"
                                                            type="submit"
                                                        >
                                                            Login
                                                        </Button>
                                                    </div>

                                                    <Link className="small text-muted" to="/">
                                                        Forgot password?
                                                    </Link>
                                                    <p className="mb-5 pb-lg-2 ">
                                                        Don't have an account?{" "}
                                                        <Link className="text-primary" to="/register">
                                                            Register here
                                                        </Link>
                                                    </p>
                                                    <Link to="/" className="small text-muted text-decoration-none">
                                                        Terms of use.
                                                    </Link>
                                                    <Link to="/" className="small text-muted text-decoration-none">
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
    )
}

export default LoginForm