
import './App.css';
import Navbar from './components/Navbar';
import CodeForInterview from './components/CodeForInterview';
import Adduser from './components/Adduser';
import Allusers from './components/Allusers';
import Edituser from './components/EditUser';
import {BrowserRouter, Routes ,Route} from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>

    <Routes>
    <Route path='/' element={<CodeForInterview/>} />
    <Route path='/all' element={<Allusers/>} />
    <Route path='/add' element={<Adduser/>} />
    <Route path='/edit/:id' element={<Edituser/>} />
    </Routes> 
    </BrowserRouter>
    
    </>
  
  );
}

export default App;
