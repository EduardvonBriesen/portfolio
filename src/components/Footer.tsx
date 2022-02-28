import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link } from 'react-scroll';
import PortfolioContext from '../context/context';

const Footer = () => {
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'footer' does not exist on type 'unknown'... Remove this comment to see the full error message
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <footer className="footer navbar-static-bottom">
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <Container>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <span className="back-to-top">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is
          provided... Remove this comment to see the full error message
          <Link to="hero" smooth duration={1000}>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is
            provided... Remove this comment to see the full error message
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <div className="social-links">
          {networks &&
            networks.map((network: any) => {
              const { id, name, url } = network;
              return (
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <a
                  key={id}
                  href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx'
                  flag is provided... Remove this comment to see the full error message
                  <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                </a>
              );
            })}
        </div>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <hr />
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <p className="footer__text">
          © {new Date().getFullYear()} - Template developed by // @ts-expect-error ts-migrate(17004)
          FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see
          the full error message
          <a href="https://github.com/cobidev" target="_blank" rel="noopener noreferrer">
            Jacobo Martínez
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
