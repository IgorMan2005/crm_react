import './bootstrap.min.css';
import './style.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Nav from '../Nav';
import Home from '../Home';
import Table from '../Table';
import Edit from '../Edit';
import navLinks from "../../params/navLinks";

function App() {

  return (
    <Router>
    <div className="App">
      	{/* Навигация по проекту  */}
        <Nav />

        <Routes>
          <Route path={navLinks[0]['link']} element={<Home />} />
          <Route path={navLinks[1]['link']} element={<Table />} />
          <Route path={navLinks[2]['link']} element={<Table />} />
          <Route path={`${navLinks[2]['link']}/:id`} element={<Edit />} />
        </Routes>
        
    </div>
    </Router>
  );
}

export default App;
