import React from "react";

const Login = () => {
  return (
    <div>
      <h4>React Micro frontend</h4>
      <h1>welcome to login page</h1>
      <div>
        <form action="">
          <input
            type="email"
            placeholder="email"
            style={{ margin: "12px" }}
            autoComplete="email"
          />
          <br />
          <input
            type="text"
            placeholder="password"
            style={{ margin: "12px" }}
          />
          <br />
          <a
            type="submit"
            href="/home"
            style={{
              marginLeft: "22px",
              textDecoration: "none",
              color: "red",
            }}
            autoComplete="password"
          >
            submit
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
