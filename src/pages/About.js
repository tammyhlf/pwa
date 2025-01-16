import React, { useState, useEffect } from 'react';
import '../App.css';
// import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function About() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const img = new Image();
    img.src = 'https://static.chuanyinet.com/images/home39a8182b-cccf-4d.png';
    img.onload = () => {
      setLoading(false);
    };
    img.onerror = () => {
      console.error('Image failed to load');
      setLoading(false);
    };
  }, []);

  return (
    <div className="App">
      {loading ? (
        <>
          <Skeleton height={50} width={200} count={2} />
        </>
      ) : (
        <div className="img-content">
          <img src="https://static.chuanyinet.com/images/home39a8182b-cccf-4d.png" alt="Loaded Image" />
        </div>
      )}
    </div>
  );
}

export default About;
