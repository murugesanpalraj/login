import React from "react";
import style from './login.module.scss'

const Login = () => {
  return (
    <>
      Login
      <div>
        <input className={style.border} type="text" placeholder="Email" />
        <br />
        <br />
        <input className={style.border} type="text" placeholder="password" />
        <br />

        <button type="submit">Login</button>
      </div>
    </>
  );
};

export default Login;
