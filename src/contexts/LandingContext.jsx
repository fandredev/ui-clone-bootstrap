import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const LandingContext = createContext();

export default function LandindProvider({ children }) {
  const [width, setWidth] = useState(window.innerWidth);

  const updatedViewportWidth = () => setWidth(window.innerWidth);

  const state = {
    width,
    updatedViewportWidth,
  };

  return (
    <LandingContext.Provider value={state}>{children}</LandingContext.Provider>
  );
}
LandindProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
