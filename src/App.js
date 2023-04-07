import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import About from './pages/About-us';
import Semester from './pages/Semester';
import NotesPage from './pages/StudyMaterialPage';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Background2 from './components/Background/Background2(not-used)';
import { Suspense, useEffect, useState } from 'react';
import Loader from './components/Loader/Loader';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000)
  }, [])

  return (
    <div className='App'>
      {loading ?
       <Loader />
       :
      <Router>
      <Navbar/>
      <Background2 />
        <Routes>
          <Route exact path="/" element={
          <Suspense fallback={<Loader />}>
            <HomePage/>
          </Suspense>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/notes" element={<NotesPage/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/notes/semester" element={<Semester/>}/>
        </Routes>
        <Footer/>
      </Router>
      }
    </div>
  );
}

export default App;
