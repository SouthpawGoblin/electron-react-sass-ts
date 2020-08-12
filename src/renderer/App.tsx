import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';

const App_ = styled.div`
  text-align: center;
`;

const AppLogo_ = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
  @keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`;

const AppHeader_ = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const AppLink_ = styled.a`
  color: #61dafb;
`;

function App() {
  return (
    <App_>
      <AppHeader_>
        <AppLogo_ src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <AppLink_
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppLink_>
      </AppHeader_>
    </App_>
  );
}

export default App;
