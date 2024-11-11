import './App.css';
import AboutPage from './Components/AboutPageComponent/About';
import HomePage from './Components/HomePageComponent/HomePage';
import Navbar from './Components/NavbarComponent/Navbar';
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <div className='dark:bg-black'>
      <Navbar />
      <div className='pt-10 h-screen'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
