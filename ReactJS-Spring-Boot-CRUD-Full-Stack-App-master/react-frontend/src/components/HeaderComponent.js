import React from 'react';
import { Link } from 'react-router-dom'; // if using React Router

const HeaderComponent = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="d-flex justify-content-center w-100">
          <Link to="/" className="navbar-brand">
            Employee Management App
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
