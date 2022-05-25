import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import TabelaAlunos from './app/Tabela/tabelaAlunos';
import Apphome from './app/appHome';

function App() {
  return <BrowserRouter>
  <Routes>
      <Route exact path='/Tabela' element={<TabelaAlunos/>} /> 
      <Route exact path='/' element={<Apphome/>} /> 
  </Routes>
  </BrowserRouter>;
}

export default App;
