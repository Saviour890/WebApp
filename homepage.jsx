import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/homepage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
const Homepage = () => {
  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="logo">Study with us</div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/universities">Universities</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>

        <ul className="social-icons">
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
          </li>
        </ul>
      </nav>

      <div className="hero-section">
        <div className="quote">
          <h1>Your Future Starts Here</h1>
          <p>Discover the best courses and universities that suit your aspirations.</p>
        </div>
        <div className="buttons">
          <Link to="/explore" className="explore-button orange">Explore Now</Link>
          <Link to="/login" className="explore-button yellow">Get Started</Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
