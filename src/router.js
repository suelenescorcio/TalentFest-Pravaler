import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';

const AllRoutes = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
  
export default AllRoutes;