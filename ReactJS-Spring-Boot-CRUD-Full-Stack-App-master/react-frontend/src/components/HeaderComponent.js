// import React, { Component } from 'react'

// class HeaderComponent extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
                 
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <header>
//                     <nav className="navbar navbar-expand-md navbar-dark bg-dark">
//                     <div><a href="https://javaguides.net" className="navbar-brand">Employee Management App</a></div>
//                     </nav>
//                 </header>
//             </div>
//         )
//     }
// }

// export default HeaderComponent
import React from 'react';
import { Link } from 'react-router-dom'; // if using React Router

const HeaderComponent = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div>
          <Link to="/" className="navbar-brand">
            Employee Management App
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
