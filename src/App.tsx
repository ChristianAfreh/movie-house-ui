
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import Main from './pages/Main';
import Movies from './pages/Movies';


import './App.css';
import Actors from './pages/Actors';
import Producers from './pages/Producers';
import Genres from './pages/Genres';

const App : React.FC = () => {

  return (
    <div className="grid grid-cols-8 mt-6 gap-2">
      <BrowserRouter>

        <LeftSidebar />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/actors" element={<Actors />} />
          <Route path="/producers" element={<Producers />} />  
        </Routes>
        
        <RightSidebar />

      </BrowserRouter>

    </div>
  )
}

export default App;
