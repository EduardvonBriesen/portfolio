import React from 'react';

// @ts-expect-error ts-migrate(2554) FIXME: Expected 1 arguments, but got 0.
const PortfolioContext = React.createContext();

export const PortfolioProvider = PortfolioContext.Provider;
export const PortfolioConsumer = PortfolioContext.Consumer;

export default PortfolioContext;
