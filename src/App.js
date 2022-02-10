import React from 'react';
import styled, { createGlobalStyle } from "styled-components";
import { reset } from 'styled-reset';
import TodoContainer from './components/TodoContainer';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <TodoBox>
        <TodoContainer />
      </TodoBox>
    </>
  );
};

const GlobalStyles = createGlobalStyle`
  ${reset}
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    -webkit-text-size-adjust: none;
    font-size: 14px;
  }

  button {
    outline: none;
  }

  input:focus {
    outline: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  .contents {
    height: 100%;
  }
`;

const TodoBox = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  background: #f1f1f1;
  align-items: center;
`;

export default App;