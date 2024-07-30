// src/components/Login.js
import React from 'react';

const Login = () => {
  return (
    <div className="login-page">
      <h2>Login</h2>
      <form>
        <div>
          <label>Email</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
