import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import './App.css';
import Home from './pages/Home';
import Tv_Show from './pages/Tv_Show';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Searchpage from './pages/Searchpage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes using <Route> components */}
        <Route path='search' element={<Searchpage/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/tv-shows" element={<Tv_Show />} />
      </Routes>
    </Router>
  );
}

export default App;
