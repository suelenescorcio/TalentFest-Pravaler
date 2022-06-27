import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Comparator from './pages/comparator/comparator';

const AllRoutes = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/comparator' element={<Comparator />} />
        </Routes>
      </div>
    </Router>
  );
}
  
export default AllRoutes;