import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div>
      <header>

      </header>

      <main className="container mt-5 flex-grow-1">
        <h1 className="text-center">Meet Bailey!</h1>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="info-box">
              <h2>About Bailey</h2>
              <p>Bailey is a fun-loving, energetic Golden Retriever. He enjoys long walks in the park, chasing squirrels, and playing fetch with his favorite ball. Adopted from a local shelter, Bailey has brought endless joy and laughter into our lives.</p>

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


    </div>
  );
}

export default About;