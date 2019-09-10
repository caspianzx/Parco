import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from './App';

function NavBar() {
  return (
    <Router>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" id="logo" href="#"><Link to="/">Parco</Link></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <Link to="/about">
                        <a class="nav-link" href="#" id="navLink">
                        About Us
                        </a>
                    </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/service">
                        <a class="nav-link" href="#" id="navLink">Service
                        </a>
                        </Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/contact">
                        <a class="nav-link" href="#" id="navLink">Contact</a>
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
      <h2>Landing Page in progress</h2>
      <p id="first">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About us in progres</h2>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact goes here</h2>
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