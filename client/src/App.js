import React from 'react';
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { colors } from "./constants";


const GlobalStyle = createGlobalStyle`
  body {
    font-family: Cairo;
    font-weight: 400;
    color: ${colors.primary};
    background-color: ${colors.background};
    height: 100%;
  }
`

const App = () => {

  

  return (
    <>
      <GlobalStyle/>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
