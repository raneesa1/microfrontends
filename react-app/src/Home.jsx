import React, { useEffect, useState } from "react";
import eventBus from "../../shared/eventBus"; // Correct path to eventBus

const Home = () => {
  const sendCustomEvent = () => {
    const customEvent = new CustomEvent("reactToAngularEvent", {
      detail: { message: "Hello from React!" },
    });
    console.log("send data function called");
    window.dispatchEvent(customEvent);
  };
  return (
    <div>
      <h4>react micro frontend</h4>
      <div style={{ display: "flex" }}>
        <h1>welcome to home page</h1>{" "}
        <a href="/angular-profilePage" style={{ textDecoration: "none" }}>
          profile
        </a>
      </div>
    </div>
  );
};

export default Home;
