import './bootstrap.min.css';
import './style.css';

import Nav from '../Nav';
import Home from '../Home';
import Table from '../Table';
import Edit from '../Edit';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {


  return (
    <Router>
    <div className="App">
      	{/* Навигация по проекту  */}
        <Nav />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/table' element={<Table />} />
          <Route path='/edit' element={<Edit />} />
        </Routes>
        
    </div>
    </Router>
  );
}

export default App;
