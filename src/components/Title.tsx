import React from 'react';
import PropTypes from 'prop-types';

const Fade = require('react-reveal/Fade');

const Title = ({ title }: any) => (
  <Fade bottom duration={1000} delay={300} distance="0px">
    <h2 className="section-title">{title}</h2>
  </Fade>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
