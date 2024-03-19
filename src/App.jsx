import './App.css';
import CadastrarContato from './pages/CadastrarContato';
import Layout from './pages/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListagemContatos from './pages/ListagemContatos';
import Home from './pages/Home';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/cadastrar-contato' element={<CadastrarContato />} />
            <Route path='/listar-contatos' element={<ListagemContatos />} />
          </Route > 
        </Routes>
      </Router>
    </>
  )
}

export default App
