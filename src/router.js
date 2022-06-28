import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/index';
import Comparator from './pages/comparator/index';
import Dice from './pages/dice/dice';

const AllRoutes = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/comparator' element={<Comparator />} />
          <Route path='/dice' element={<Dice />} />

        </Routes>
      </div>
    </Router>
  );
}
  
export default AllRoutes;