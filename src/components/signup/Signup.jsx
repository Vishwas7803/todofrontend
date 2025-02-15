import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h2>SIGNUP</h2>
            <form className="signup-form">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" placeholder="Enter your email" required />

              <label htmlFor="password">Password:</label>
              <input type="password" id="password" placeholder="Enter your password" required />

              <button type="submit" className="submit-btn">Sign Up</button>
            </form>
          </div>
          <div className="col-lg-4 d-flex justify-content-center align-items-center">
            <div className="signup-text">
              <h3>Sign Up</h3>
              <p>Create your account now!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
