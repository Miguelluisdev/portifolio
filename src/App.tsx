import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Skills from './components/Skills/Skills';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <BrowserRouter >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Outlet />
    </>
  );
}

export default App;
