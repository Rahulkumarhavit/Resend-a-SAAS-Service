import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import Service from './components/Service';
function App() {

  return (
    <>
     <Router> 
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
