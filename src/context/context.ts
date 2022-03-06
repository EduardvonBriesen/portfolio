import React from 'react';

interface ContextProps {
  projects: any;
  footer: any;
  contact: any;
  about: any; }

  const defaultPortfolio = {
    projects: null,
    footer: null,
    contact: null, 
    about: null, }

const PortfolioContext = React.createContext<ContextProps>(default);

export const PortfolioProvider = PortfolioContext.Provider;
export const PortfolioConsumer = PortfolioContext.Consumer;

export default PortfolioContext;
