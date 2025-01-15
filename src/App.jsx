import './App.css'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import { GlobalStateProvider } from './Context/GlobalState';
import Dashboard from './Components/Dashboard/Dashboard';
import LatestItems from './Components/LatestItems/LatestItems';

function App() {


  return (
    <>
      <GlobalStateProvider>
        <Router>
          <Navbar></Navbar>
          {/* <h1>Vite + React</h1> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/latestItems" element={<LatestItems />} />

          </Routes>
          <Footer></Footer>
        </Router>
      </GlobalStateProvider>
    </>
  )
}

export default App
