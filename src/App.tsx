import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Schedule } from './pages/Schedule';
import { Standings } from './pages/Standings';
import Home from './pages/Home';

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/standings' element={<Standings />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
