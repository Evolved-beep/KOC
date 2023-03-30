import './App.css';
import Home from './pages/Home';
import Navbar from './component/Navbar';
import About from './pages/About';
import ProductDetail from './pages/ProductDetail'
import Footer from './pages/Footer';
import Error from './pages/Error';
import {
  createBrowserRouter,
  RouterProvider,
  Routes,  
  Route, 
  Link,
} from "react-router-dom"


function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
   </div>
  )
}

export default App;
