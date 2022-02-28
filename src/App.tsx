import React, { useState, useEffect } from 'react';
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/Hero' was resolved to '/home/... Remove this comment to see the full error message
import Hero from './components/Hero';
// import About from './About/About';
// import Projects from './Projects/Projects';
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/Contact' was resolved to '/ho... Remove this comment to see the full error message
import Contact from './components/Contact';
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/Footer' was resolved to '/hom... Remove this comment to see the full error message
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
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '{ id: string; img: string; title... Remove this comment to see the full error message
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
