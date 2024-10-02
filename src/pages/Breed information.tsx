import React, { useEffect, forwardRef } from 'react';
import { useLocation } from 'react-router-dom';
import './Breed information.css'; 

const BreedInformation = forwardRef<HTMLDivElement>((_, ref) => {
  const location = useLocation(); 

  useEffect(() => {
  }, [location]);

  return (
    <div className="breed-information" ref={ref}> 
      <h1 className="text-center">Golden Retriever Breed Information</h1>
      <div className="info-box">
        <h2>Overview</h2>
        <p>Golden Retrievers are known for their friendly, intelligent, and devoted nature. They make excellent family pets and are great with children.</p>

        <h3>Temperament</h3>
        <p>These dogs are friendly, reliable, and trustworthy. They are social dogs that thrive on companionship and need plenty of social interaction.</p>

        <h3>Physical Characteristics</h3>
        <ul>
          <li>Height: 21-24 inches</li>
          <li>Weight: 55-75 pounds</li>
          <li>Coat: Dense and water-repellent with a wavy or straight texture.</li>
          <li>Color: Golden, ranging from light to dark shades.</li>
        </ul>

        <h3>Health Considerations</h3>
        <p>Golden Retrievers are generally healthy, but they are prone to certain health conditions such as hip dysplasia, elbow dysplasia, and certain heart disorders. Regular vet check-ups and a healthy diet can help manage their health.</p>

        <h3>Care and Training</h3>
        <p>These dogs require regular exercise and mental stimulation. They excel in obedience training and enjoy learning new commands and tricks.</p>
      </div>
    </div>
  );
});

export default BreedInformation;
