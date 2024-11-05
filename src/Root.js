import React from 'react';
import { BrowserRouter as Router,Route, Routes,} from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Book from './Book';



const Root = () => {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<App/>}/>
      <Route path="home" element={<App/>}/>
        <Route path="/book/:livroId" element={<Book/>}/>
      </Routes>
    </Router>
  );
};

export default Root;
