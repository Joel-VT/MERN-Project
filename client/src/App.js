import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import AllPirates from './views/AllPirates';
import OnePirate from './views/OnePirate';
import NewPirate from './views/NewPirate';
import NotFound from './views/NotFound';

function App() {
  return (
    <div className="container">
        <Routes>
          <Route path='/' element={<Navigate to='/pirates' replace />} />
          <Route path='/pirates' element={<AllPirates />} />
          <Route path='/pirates/:id' element={<OnePirate />} />
          <Route path='/pirates/new' element={<NewPirate />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;
