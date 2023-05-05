
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer';




const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>



        <Route exact path="/" element={<Home />}></Route>

        <Route exact path="/about" element={<About />}></Route>




      </Routes>
      <Footer />

    </Router>

  )
}

export default App