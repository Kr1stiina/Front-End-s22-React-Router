import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';

function App() {

  return (

    <BrowserRouter>

      <div className="Box">
        <h1> Welcome to React Router</h1>
      </div>

      <div className="App">
        <Link to="/">Home</Link>{' '}
        <Link to="/about">About</Link>{' '}
        <Link to="/contact">Contact</Link>{' '}
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
