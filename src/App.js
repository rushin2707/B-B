import React from 'react';
import './App.css'; // If you have any CSS styles
import logo from './B&B.jpg'; // Import your Beats&Bytes logo image
import { BrowserRouter as Router, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Section 1: Top most section */}
        <header className="top-section">
          <Link to="/">
            <img src={logo} alt="Beats&Bytes Logo" className="logo" />
          </Link>
          <nav className="nav-links">
            <Link to="/features" style={{ marginRight: '20px' }}>Features</Link>
            <Link to="/pro" style={{ marginRight: '20px' }}>B&B Pro</Link>
            <Link to="/testimonials" style={{ marginRight: '20px' }}>Testimonials</Link>
            <Link to="/stats" style={{ marginRight: '20px' }}>Stats</Link>
            <Link to="/contact" style={{ marginRight: '20px' }}>Contact Us</Link>
          </nav>
          <button className="download-button">Download</button>
        </header>

        {/* Section 2: Advertisement */}
        <section className="advertisement">
          <h2>Beats&Bytes - Striking the right chord between musicians</h2>
          <div className="download-options">
            <button className="android-download">Download for Android</button>
            <button className="ios-download">Download for iOS</button>
          </div>
        </section>

        {/* Section 3: Connect, Collab, Watch/Explore, Chat/Music Rooms */}
        <section className="features">
          <h2>Connect    |     Collab     |     Explore     |     Chat</h2>
          {/* Add content for each feature box */}
        </section>

        {/* Add margin or padding to create vertical spacing between sections */}
        <div style={{ marginBottom: '50px' }}></div>

        {/* Section 4: Info about B&B Pro */}
        <section className="pro">
          <h2>B&B Pro</h2>
          {/* Add details about B&B Pro */}
        </section>

        {/* Add margin or padding to create vertical spacing between sections */}
        <div style={{ marginBottom: '50px' }}></div>

        {/* Section 5: Testimonials */}
        <section className="testimonials">
          <h2>Testimonials</h2>
          {/* Add testimonials here once available */}
        </section>

        {/* Add margin or padding to create vertical spacing between sections */}
        <div style={{ marginBottom: '50px' }}></div>

        {/* Section 6: Stats */}
        <section className="stats">
          <h2>Stats</h2>
          {/* Include stats/info about your app here */}
        </section>

        {/* Add margin or padding to create vertical spacing between sections */}
        <div style={{ marginBottom: '50px' }}></div>

        {/* Section 7: Contact Us */}
        <section className="contact">
          <h2>Contact Us</h2>
          {/* Add contact information here */}
        </section>

        {/* Footer */}
        <footer>
          {/* Add footer content if needed */}
        </footer>
      </div>
    </Router>
  );
}

export default App;
