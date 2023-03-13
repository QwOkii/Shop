import React from 'react';
import { Header } from './components/Header/Header';
import { Wreapper } from './components/styled/Wreapper.styles';

function App() {
  return (
    <Wreapper>
      <Header/>
      <div id='content'>
        1 <div className=""></div>
      </div>
    </Wreapper>
  );
}

export default App;
