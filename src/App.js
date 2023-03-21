import React from "react";
import Content from "./component/Content";
import Header from "./component/Header";

function App() {
  return (
    <>
    <Header 
    home="Home"
    services="Service"
    contact="Contact"
    about="About Us"
    btn1="Log In"
    btn2="Sign Up"
    />
    <Content/>
    </>  
  );
}

export default App;
