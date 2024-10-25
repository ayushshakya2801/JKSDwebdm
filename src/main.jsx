import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate } from 'react-router-dom'
import Home from './components/Home.jsx'
import ContactUs from './pages/ContactUs/ContactUs.jsx'
import AboutUs from './pages/AboutUs/AboutUs.jsx'
import PageNotFound from './pages/PageNotFound/PageNotFound.jsx'
import WebDev from './pages/WebDevelopment/WebDev.jsx'
import DigMarketing from './pages/DigitalMarketing/DigitalMarketing.jsx'
import Blogs from './pages/Blogs/Blogs.jsx'
import Socialmedia from './pages/Blogpages/Socialmedia.jsx'
import TopBenefits from './pages/Blogpages/TopBenefits.jsx'
import Top10 from './pages/Blogpages/Top10.jsx'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='contact' element={<ContactUs />} />
      <Route path='about' element={<AboutUs />} />
      <Route path='webdev' element={<WebDev />} />
      <Route path='digitalmarketing' element={<DigMarketing />} />
      <Route path='blogs' element={<Blogs />} />
      <Route path='socialmedia' element={<Socialmedia />} />
      <Route path='top10' element={<Top10 />} />
      <Route path='topbenefits' element={<TopBenefits />} />
      <Route path='404' element={<PageNotFound />} />
      <Route path='*' element={<Navigate to="/404" replace />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)