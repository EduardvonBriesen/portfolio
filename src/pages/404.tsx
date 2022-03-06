import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { headData } from '../mock/data';
import '../style/main.scss';

const Fade = require('react-reveal/Fade');

export default () => {
  const { lang } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />

        <title>Page not found</title>

        <html lang={lang || 'en'} />

        <meta name="description" content="Page not found" />
      </Helmet>

      <section id="hero" className="jumbotron">
        <Container>
          <Fade bottom duration={1000} delay={500} distance="30px">
            <h1 className="hero-title text-center">
              Sorry, this path does not exist
              <span role="img" aria-label="emoji">
                😞
              </span>
            </h1>
          </Fade>

          <Fade bottom duration={1000} delay={1000} distance="30px">
            <p className="hero-cta justify-content-center">
              // TODO: Add a link to the home page
            </p>
          </Fade>
        </Container>
      </section>
    </>
  );
};
