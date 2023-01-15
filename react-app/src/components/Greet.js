import React from "react";
import '../App.css';
import logo from '../atgeir_logo.svg';

// function Greet() {
//     return (
//         <header className="App-header">
//             <img src={logo} className="App-logo" alt="logo" />
//             <p>
//                 Welcome to Atgeir Requirement portal!
//             </p>
//             <a
//                 className="App-link"
//                 href="https://reactjs.org"
//                 target="_blank"
//                 rel="noopener noreferrer"
//             >
//                 Enter
//             </a>
//         </header>
//     )
// }

const Greet = () => (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Welcome to Atgeir Requirement portal!
        </p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            Enter
        </a>
    </header>
)

export default Greet;