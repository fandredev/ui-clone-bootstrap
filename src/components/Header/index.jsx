import React, { useContext, useEffect } from "react";

import { DiGithubBadge } from "react-icons/di";
import { BsBootstrap } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { FaSlackHash } from "react-icons/fa";
import { SiCircleci } from "react-icons/si";

import { Link } from "react-router-dom";
import Burger from "../Menu";
import { Container } from "./styled";
import { LandingContext } from "../../contexts/LandingContext";

const Header = () => {
  const context = useContext(LandingContext);

  const { width, updatedViewportWidth } = context;

  useEffect(() => {
    window.addEventListener("resize", updatedViewportWidth);
    return () => window.removeEventListener("resize", updatedViewportWidth);
  }, [updatedViewportWidth]);
  return (
    <Container>
      {width < 768 ? (
        <Burger />
      ) : (
        <ol id="links">
          <li>
            <Link to="#">Home</Link>
          </li>
          <li>
            <Link to="#">Documentation</Link>
          </li>

          <li>
            <Link to="#">Examples</Link>
          </li>

          <li>
            <Link to="#">Services</Link>
          </li>

          <li>
            <Link to="#">Icons</Link>
          </li>

          <li>
            <Link to="#">Themes</Link>
          </li>

          <li>
            <Link to="#">Expo</Link>
          </li>

          <li>
            <Link to="#">Blog</Link>
          </li>
        </ol>
      )}
      <i>
        <BsBootstrap size={40} />
      </i>
      <ol>
        <li>v4.5</li>
        <li>
          <DiGithubBadge size={25} />
        </li>
        <li>
          <FiTwitter size={25} />
        </li>
        <li>
          <FaSlackHash size={25} />
        </li>
        <li>
          <SiCircleci size={25} />
        </li>
        {width > 1000 ? (
          <li>
            <button type="button">Download</button>
          </li>
        ) : null}
      </ol>
    </Container>
  );
};

export default Header;
