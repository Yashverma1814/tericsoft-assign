import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import { AllUsers } from './pages/AllUsers';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/allusers' element={<AllUsers />} />
      </Routes>
    </div>
  );
}

export default App;
