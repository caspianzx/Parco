import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from './App';
import styles from './styles/landingpage.scss'

function NavBar() {
  return (
    <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">
            <a className="navbar-brand" id="logo" href="#"><Link to="/">Parco</Link></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link to="/about">
                        <a className="nav-link" href="#" id="navLink">
                        About Us
                        </a>
                    </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/service">
                        <a className="nav-link" href="#" id="navLink">Service
                        </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/contact">
                        <a className="nav-link" href="#" id="navLink">Contact</a>
                    </Link>
                    </li>
                </ul>
            </div>
        </nav>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/service" component={Service} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
        <div className ="container-fluid">
            <div className ="row">
                <div className ="col-12 p-0">
                    <div className={styles.banner}>
                    </div>
                </div>
            </div>
            <div className ="row">
                <div className ="col-8 offset-2">
                    <div className= {styles.aboutus} >ABOUT US</div>
                    <p className={styles.intro}><span className ={styles.brand}>PARCO</span> is  a visual and interactive communication agency specialized in internet industry, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ut et voluptates repudiandae sint et molestiae non recusandae.</p>
                </div>
            </div>

        </div>

    </div>
  );
}

function About() {
  return (
    <div>
       <div className ="container">
            <div className ="row">
                <div className ="col-8 offset-2">
                    <h2>About Page in progress</h2>
                </div>
            </div>
        </div>
    </div>
  );
}

function Contact() {
  return (
    <div>
       <div className ="container">
            <div className ="row">
                <div className ="col-8 offset-2">
                    <h2>Contact Page in progress</h2>
                </div>
            </div>
        </div>
    </div>
  );
}

function Service() {
  return (
    <div>
      <App/>
    </div>
  );
}


export default NavBar;