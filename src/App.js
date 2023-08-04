import { HashRouter as HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
