import React from "react";
import { Container } from "./styled";

const Footer = () => {
  return (
    <Container>
      <div>
        <nav>
          <ul>
            <li>Github</li>
            <li>Twitter</li>
            <li>Examples</li>
            <li>About</li>
          </ul>
        </nav>
        <p>
          Designed and built with all the love in the world by the{" "}
          <strong>Bootstrap team </strong>
          with the help of <strong>our contributors.</strong>
        </p>
        <p>
          Currently v4.5.2. Code licensed <strong>MIT</strong>, docs{" "}
          <strong>CC BY 3.0.</strong>
        </p>
      </div>
    </Container>
  );
};

export default Footer;
