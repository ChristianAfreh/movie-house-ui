
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import Main from './pages/Main';
import Movies from './pages/Movies';


import './App.css';
import Actors from './pages/Actors';

function App() {

  return (
    <div className="grid grid-cols-8 mt-6 gap-2">
      <BrowserRouter>

        <LeftSidebar />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/actors" element={<Actors />} />
        </Routes>
        
        <RightSidebar />

      </BrowserRouter>

    </div>
  )
}

export default App
