import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
// import About from './About/About';
// import Projects from './Projects/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { PortfolioProvider } from './context/context';

import { aboutData, projectsData, contactData, footerData } from './mock/data';

function App() {
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ about, projects, contact, footer }}>
      <Hero />
      {/* <About />
      <Projects /> */}
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;