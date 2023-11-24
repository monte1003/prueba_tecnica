import React from "react";
import "./Login.css";
// Creamos la función Login que va a contener un formulario y exportarla
const Login = () => {
  return (
    <div>
      <form method="post" action="https://bank.jedidiazfagundez.site/api/login">
        <h1>Login</h1>
        <span>User</span>
        <input type="text" />
        <span>Password</span>
        <input type="password" name="" id="" />
        <button>Log In</button>
      </form>
    </div>
  );
};
//Exportamos la función Login
export default Login;
