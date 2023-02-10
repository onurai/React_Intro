import './App.css';
import './Pages/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Pages/Contact';
import Main from './Pages/Main';
import Navbar from './Pages/Navbar';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import UseState from './Hooks/UseState';
import UseEffect from './Hooks/UseEffect';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Main />}/> 
          <Route path='/Contact' element={<Contact />}/>
          <Route path='/About' element={<About />}/>
          <Route path='*' element={<NotFound />}/>
          <Route path='UseState' element={<UseState />}/>
          <Route path='UseEffect' element={<UseEffect />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
