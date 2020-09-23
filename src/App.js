import React from 'react';
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { colors } from "./constants";



const Wrapper = styled.div`
  font-family: Cairo;
  font-weight: 400;
  color: #FFFFFF;
  background-color: ${colors.background};
  height: 100%;
`;

const App = () => {

  

  return (
    <Wrapper>
      <Header />
      <Main />
      <Footer />
    </Wrapper>
  );
}

export default App;
