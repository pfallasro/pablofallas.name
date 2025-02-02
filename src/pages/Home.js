import React from 'react';
import placeholderImg from '../assets/pablo-profile.jpg';

function Home() {
  return (
    <main className="hero-section">
      <div className="profile-image-wrapper">
        <img 
          src={placeholderImg} 
          alt="Pablo Fallas" 
          className="profile-image" 
        />
      </div>
      <div className="hero-content">
        <h3 className="subtitle">Software Developer</h3>
        <h1 className="name">Pablo Fallas TEST</h1>
        <p className="description">
          Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis,
          risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis 
          purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu.
        </p>
        <div className="hero-buttons">
          <a href="#" className="btn primary-btn">Download CV</a>
          <a href="/contact" className="btn secondary-btn">Contact</a>
        </div>
      </div>
    </main>
  );
}

export default Home;