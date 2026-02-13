// import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home';
import ContectUs from './pages/CotectUs.jsx';
import PolicyPage from './pages/PolicyPage.jsx';
function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/contact'element={<ContectUs/>}/>
        <Route path='/policy' element={<PolicyPage/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App;
