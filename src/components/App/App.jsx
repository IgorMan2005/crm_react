import './bootstrap.min.css';
import './style.css';

// BrowserRouter for Browser:
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// HashRouter for  GitHub Pages:
// import {HashRouter as Router, Routes, Route} from 'react-router-dom';

import Nav from '../Nav';
import Home from '../Home';
import Table from '../Table';
import Edit from '../Edit';
import navLinks from "../../params/navLinks";
import NotFound from '../NotFound';
import EditNotFound from '../EditNotFound';

import { useState } from 'react';


function App() {

  const [students, setStudents] = useState(null)

  return (
    <Router>
    <div className="App">
      	{/* Навигация по проекту  */}
        <Nav />

        <Routes>

          <Route path={navLinks[0]['link']} element={<Home />} />
          <Route path={navLinks[1]['link']} element={<Table />} />
          <Route path={navLinks[2]['link']} element={<EditNotFound />} />
          <Route path={`${navLinks[2]['link']}/:id`} element={<Edit />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
        
    </div>
    </Router>
  );
}

export default App;
