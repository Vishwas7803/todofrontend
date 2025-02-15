import React from "react";
import "./signin.css";

const Signin = () => {
  return (
    <div className="signin">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h2>SIGNIN</h2>
            <form className="signin-form">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" placeholder="Enter your email" required />

              <label htmlFor="password">Password:</label>
              <input type="password" id="password" placeholder="Enter your password" required />

              <button type="submit" className="submit-btn">Sign In</button>
            </form>
            <div className="forgot-password">
              <a href="/forgot-password">Forgot Password?</a>
            </div>
          </div>
          <div className="col-lg-4 d-flex justify-content-center align-items-center">
            <div className="signin-text">
              <h3>Sign In</h3>
              <p>Welcome back! Log into your account.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
