import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Helmet } from 'react-helmet';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../App' was resolved to '/home/von-briesen... Remove this comment to see the full error message
import App from '../App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

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
        <title>{title || 'Gatsby Simplefolio'}</title>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <html lang={lang || 'en'} />
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <meta name="description" content={description || 'Gatsby Simplefolio'} />
      </Helmet>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <App />
    </>
  );
};
