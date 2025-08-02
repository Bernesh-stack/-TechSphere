import './index.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function AppContent() {
  const location = useLocation();


  const hideNavbarRoutes = ['/login', '/signup'];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <div>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
