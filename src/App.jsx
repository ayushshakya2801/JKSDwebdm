
import './App.css'
import Navbar from './components/Navbar'
import FloatingContactButton from './components/FloatingContactButton'
import Footer from './components/Footer'
import { Outlet, useLocation } from 'react-router-dom'
function App() {
  const location = useLocation();
  const isNotFoundPage = location.pathname === '/404' || location.pathname === '*';
  return (
    <>
      <div >
      {!isNotFoundPage && <Navbar />}
      <Outlet />
      {!isNotFoundPage && <Footer />}
      {!isNotFoundPage && <FloatingContactButton />}
      </div>
    </>
  )
}

export default App
