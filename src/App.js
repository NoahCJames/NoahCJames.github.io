import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './App.css';
// We will create these next
const Resume = () => <div style={{color: 'white', padding: '50px'}}>Resume Page Coming Soon</div>;
const Portfolio = () => <div style={{color: 'white', padding: '50px'}}>Portfolio Page Coming Soon</div>;

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;