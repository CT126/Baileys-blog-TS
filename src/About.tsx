import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './about.css';

const About: React.FC = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <Link className="navbar-brand" to="/">Bailey Blog</Link>  {/* Use Link instead of a href */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>  {/* Link to home */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gallery">Gallery</Link>  {/* Link to gallery */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/breed-information">Breed Information</Link>  {/* Link to breed info */}
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/about">About Bailey</Link>  {/* Link to about */}
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main className="container mt-5 flex-grow-1">
        <h1 className="text-center">Meet Bailey!</h1>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="info-box">
              <h2>About Bailey</h2>
              <p>
                Bailey is a fun-loving, energetic Golden Retriever. He enjoys long walks in the park, chasing squirrels,
                and playing fetch with his favorite ball. Adopted from a local shelter, Bailey has brought endless joy
                and laughter into our lives.
              </p>

              <h3>Favorite Activities</h3>
              <ul>
                <li>Playing fetch</li>
                <li>Swimming in the lake</li>
                <li>Exploring new trails</li>
                <li>Cuddling on the couch</li>
              </ul>

              <h3>Fun Facts</h3>
              <ul>
                <li>Bailey can do several tricks, including roll over and play dead!</li>
                <li>His favorite toy is a squeaky duck.</li>
                <li>He loves peanut butter treats.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2024 Bailey Blog. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default About;
