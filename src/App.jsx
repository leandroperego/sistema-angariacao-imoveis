import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import CadastrarContato from './pages/CadastrarContato';
import ListagemContatos from './pages/ListagemContatos';
import Login from './pages/Login';
import CriarConta from './pages/CriarConta';
import { UserContext } from './context/user-context';
import React, { useContext } from 'react';

function App() {

  const { user } = useContext(UserContext);

  return (
    <Router basename='/sistema-angariacao-imoveis'>
        <Routes>
          {
            !user.id
              ? (
                <>
                  <Route path='/' element={<Login />} />
                  <Route path='/criar-conta' element={<CriarConta />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/*' element={<Login />} />
                </>
              ) : (
                <Route path="/" element={<Layout />}>
                  <Route index path='/' element={<Home />} />
                  <Route path='/home' element={<Home />} />
                  <Route path='/cadastrar-contato' element={<CadastrarContato />} />
                  <Route path='/listar-contatos' element={<ListagemContatos />} />
                </Route >
              )
          }
        </Routes>
    </Router>

  )
}

export default App
