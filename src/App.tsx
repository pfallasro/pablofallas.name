import React from 'react';
import NavBar from './components/NavBar';

// Import sections as components
import Home from './pages/Home';
import Resume from './pages/Resume';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-surface-50">
      <NavBar />
      
      <main>
        <section id="home">
          <Home />
        </section>
        
        <section id="resume">
          <Resume />
        </section>
      </main>
    </div>
  );
};

export default App;