import './App.css';
import HomePage from './Components/HomePageComponent/HomePage';
import Navbar from './Components/NavbarComponent/Navbar';
// import {Routes, Route} from "react-router-dom"
// import { useContext } from 'react';
// import { StoreContext } from './StoreContextComponent/StoreContext';

function App() {
  // const { theme } = useContext(StoreContext);
  return (
    <div className='dark:bg-black'>
      <Navbar/>
      {/* <Routes>
        <Route> */}
        <div className='pt-10 h-screen'>
          <HomePage/>
        </div>
        {/* </Route>
      </Routes> */}
    </div>
  );
}

export default App;
