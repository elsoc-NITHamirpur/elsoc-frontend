import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/BasicComponents/Navbar';
import Footer from './components/BasicComponents/Footer';
import HomePage from './pages/HomePage';
import About from './pages/About-us';
import Semester from './pages/Semester';
import NotesPage from './pages/StudyMaterialPage';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Background2 from './components/Background/Background2';

function App() {
  return (
    <>
      <Navbar/>
      <Background2 />
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/notes" element={<NotesPage/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/notes/semester" element={<Semester/>}/>
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
