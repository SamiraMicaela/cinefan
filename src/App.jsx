import { useState , React} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home.';
import { MovieDetails } from './pages/MovieDetails';
import { Navbar } from './components/navbar';
import { Club } from './pages/Club.'
import { Profile } from './pages/Profile';
import { Trivia } from './pages/Trivia'
import './App.css'

function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/movie/:id" component={MovieDetails} />
          <Route path="/club" component={Club} />
          <Route path="/profile" component={Profile} />
          <Route path="/trivia" component={Trivia} />
        </Routes>
      </Router>
    </>
  )
}

export default App
