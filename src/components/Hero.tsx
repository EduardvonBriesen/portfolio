import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';

const speed = 200;

const whatAmI = [
  'an aspiring UX expert.',
  'a full-stack developer.',
  'a front-end developer.',
  'a back-end developer.',
  'a full-stack developer.',
];

const Header = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  const [count, setCount] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    if (count < whatAmI.length - 1) {
      setTimeout(() => {
        if (fadeIn) {
          setFadeIn((prevState) => !prevState);
        } else {
          setCount((prevCount) => prevCount + 1);
          setFadeIn(true);
        }
      }, speed * 2);
    }
  }, [fadeIn]);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {'Hi, my name is '}
            <span className="text-color-main">Eduard von&nbsp;Briesen</span>
            <br />
            <div>
              I&apos;m
              <Fade top opposite when={fadeIn} duration={speed}>
                {whatAmI[count % whatAmI.length]}
              </Fade>
            </div>
          </h1>
        </Fade>

        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                Know more
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
