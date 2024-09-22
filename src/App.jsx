
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet, useLocation } from 'react-router-dom'
function App() {
  const location = useLocation();
  const isNotFoundPage = location.pathname === '/404' || location.pathname === '*';
  return (
    <>
      <div className='bg-gray-300'>
      {!isNotFoundPage && <Navbar />}
      <Outlet />
      {!isNotFoundPage && <Footer />}
      </div>
    </>
  )
}

export default App
