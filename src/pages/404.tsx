import React from 'react';
import { Link } from 'gatsby';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import Fade from 'react-reveal/Fade';
import 'bootstrap/dist/css/bootstrap.min.css';

import { headData } from '../mock/data';
import '../style/main.scss';

export default () => {
  const { lang } = headData;

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <Helmet>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <meta charSet="utf-8" />
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <title>Page not found</title>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <html lang={lang || 'en'} />
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <meta name="description" content="Page not found" />
      </Helmet>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <section id="hero" className="jumbotron">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Container>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is
          provided... Remove this comment to see the full error message
          <Fade bottom duration={1000} delay={500} distance="30px">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is
            provided... Remove this comment to see the full error message
            <h1 className="hero-title text-center">
              Sorry, this path does not exist // @ts-expect-error ts-migrate(17004) FIXME: Cannot
              use JSX unless the '--jsx' flag is provided... Remove this comment to see the full
              error message
              <span role="img" aria-label="emoji">
                😞
              </span>
            </h1>
          </Fade>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is
          provided... Remove this comment to see the full error message
          <Fade bottom duration={1000} delay={1000} distance="30px">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is
            provided... Remove this comment to see the full error message
            <p className="hero-cta justify-content-center">
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is
              provided... Remove this comment to see the full error message
              <Link className="cta-btn cta-btn--hero" to="/">
                Go back
              </Link>
            </p>
          </Fade>
        </Container>
      </section>
    </>
  );
};
