import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navbar, Footer } from './components';
import Home from './pages/HomePage/Home';
import Experience from './pages/Experience/Experience'
import Certification from './pages/Certification/Certification'
import Resume from './pages/Resume/Resume'
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <GlobalStyle /> {/*get rid of the margin border in Navbar*/}
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/experience" exact element={<Experience/>} />
        <Route path="/certification" exact element={<Certification/>} />
        <Route path="/resume" exact element={<Resume/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
