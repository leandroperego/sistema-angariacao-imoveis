import './App.css';
import Layout from './pages/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path='/home' element={<p>Home</p>} />
            <Route path='/cadastrar-contato' element={<p>Cadastro Contato</p>} />
            <Route path='/listar-contatos' element={<p>Listar Contatos</p>} />
          </Route >
        </Routes>
      </Router>
    </>
  )
}

export default App
