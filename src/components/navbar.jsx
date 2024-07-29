import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">CineFan</Link>
      <Link to="/profile">Perfil</Link>
      <Link to="/trivia">Trivia</Link>
      <Link to="/club">Club</Link>
    </nav>
  );
};

export default Navbar;
