import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import ArchiveNote from './pages/ArchiveNote';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/ArchiveNote' element={<ArchiveNote />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
