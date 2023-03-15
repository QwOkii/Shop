import React from 'react';
import { Header } from './components/Header/Header';
import { Wreapper } from './components/styled/Wreapper.styles';
import { Routes,Route } from 'react-router-dom'
import { Login } from './components/Auth/Login';
import { SignUp } from './components/Auth/SignUp';
function App() {
  return (
    <Wreapper>
      <Header/>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route  path='' element={<div>main</div>}/>
      </Routes>
    </Wreapper>
  );
}

export default App;
