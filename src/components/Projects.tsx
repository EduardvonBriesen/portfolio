import React, { useContext, useEffect, useState } from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import Fade from 'react-reveal/Fade';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../context/context';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Title' was resolved to '/home/von-briese... Remove this comment to see the full error message
import Title from './Title';
// @ts-expect-error ts-migrate(6142) FIXME: Module './ProjectImg' was resolved to '/home/von-b... Remove this comment to see the full error message
import ProjectImg from './ProjectImg';

const Projects = () => {
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'projects' does not exist on type 'unknow... Remove this comment to see the full error message
  const { projects } = useContext(PortfolioContext);

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

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <section id="projects">
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <Container>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <div className="project-wrapper">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is
          provided... Remove this comment to see the full error message
          <Title title="Projects" />
          {projects.map((project: any) => {
            const { title, info, info2, url, repo, img, id } = project;

            return (
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Row key={id}>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag
                is provided... Remove this comment to see the full error message
                <Col lg={4} sm={12}>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx'
                  flag is provided... Remove this comment to see the full error message
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx'
                    flag is provided... Remove this comment to see the full error message
                    <div className="project-wrapper__text">
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx'
                      flag is provided... Remove this comment to see the full error message
                      <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx'
                      flag is provided... Remove this comment to see the full error message
                      <div>
                        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
                        '--jsx' flag is provided... Remove this comment to see the full error
                        message
                        <p>
                          {info ||
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                        </p>
                        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
                        '--jsx' flag is provided... Remove this comment to see the full error
                        message
                        <p className="mb-4">{info2 || ''}</p>
                      </div>
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx'
                      flag is provided... Remove this comment to see the full error message
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={url || '#!'}
                      >
                        See Live
                      </a>
                      {repo && (
                        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={repo}
                        >
                          Source Code
                        </a>
                      )}
                    </div>
                  </Fade>
                </Col>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag
                is provided... Remove this comment to see the full error message
                <Col lg={8} sm={12}>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx'
                  flag is provided... Remove this comment to see the full error message
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx'
                    flag is provided... Remove this comment to see the full error message
                    <div className="project-wrapper__image">
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx'
                      flag is provided... Remove this comment to see the full error message
                      <a
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
                        '--jsx' flag is provided... Remove this comment to see the full error
                        message
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
                          '--jsx' flag is provided... Remove this comment to see the full error
                          message
                          <div data-tilt className="thumbnail rounded">
                            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
                            '--jsx' flag is provided... Remove this comment to see the full error
                            message
                            <ProjectImg alt={title} filename={img} />
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
