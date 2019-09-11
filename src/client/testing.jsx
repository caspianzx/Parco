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
                    <Link to="/">
                        <a className="nav-link" href="#" id="navLink">Home</a>
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
                    <div className ={styles.overlay}></div>
                    <div className={styles.caption}>Parking will never be the same again.</div>
                    <div className={styles.banner}>
                    </div>
                </div>
            </div>
            <div className ="row">
                <div className ="col-10 offset-1">
                    <div className= {styles.aboutus} >ABOUT US</div>
                    <p className={styles.intro}><span className ={styles.brand}>PARCO</span> is an application that tracks car park lots availability around Singapore using real-time data. It features a search function that is able to filter for car parks that are near the  search query, the ability to alert the users if there are little lots in the carpark, and informs users whether free parking is available.<br/>Interested? Click the link below to get started!</p>
                </div>
            </div>
            <div className ="row">
                <div className ="col-8 offset-2">
                    <a href ="/service">
                    <div className= {styles.getstarted}><i className="fas fa-car" id={styles.carlogo}></i>GET STARTED</div>
                    </a>
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
                <div className ="col-10 offset-1">
                    <div className ={styles.team}> Our Team </div>
                    <div className ={styles.founderimage}></div>
                    <div className ={styles.foundername}>Caspian Ng</div>
                    <div className ={styles.founder}>founder</div>
                    <div className ={styles.links}>
                        <a href="https://github.com/caspianzx"><span className="fab fa-github" id={styles.linkspace}></span></a>
                        <a href="https://www.linkedin.com/in/caspian-ng/"><span className="fab fa-linkedin-in" id={styles.linkspace}></span></a>
                        <span className="fab fa-facebook-f" id={styles.linkspace}></span>
                    </div>
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