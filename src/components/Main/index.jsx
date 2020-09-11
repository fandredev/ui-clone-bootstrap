import React, { useContext, useEffect } from "react";
import { Container } from "./styled";
import adobe from "../../assets/images/adobe.jpg";
import adobe2 from "../../assets/images/adobest.jpg";
import bootstrap from "../../assets/images/bootstrap.png";

import { LandingContext } from "../../contexts/LandingContext";

const Main = () => {
  const context = useContext(LandingContext);
  const { width, updatedViewportWidth } = context;

  useEffect(() => {
    window.addEventListener("resize", updatedViewportWidth);
    return () => window.removeEventListener("resize", updatedViewportWidth);
  });

  return (
    <Container>
      <figure>
        <img src={bootstrap} alt="Logotipo Bootstrap" />
      </figure>
      <div>
        <h1>Build fast, responsive sites with Bootstrap</h1>
        <p>
          Quickly design and customize responsive mobile-first sites with
          Bootstrap, the world’s most popular front-end open source toolkit,
          featuring Sass variables and mixins, responsive grid system, extensive
          prebuilt components, and powerful JavaScript plugins.
        </p>
        <section>
          <button type="button">Get Started</button>
          <button type="button">Download</button>
        </section>
        <aside>
          <span>Currently v4.5.2</span>
        </aside>
        <figure id="adobe">
          <img src={width > 1000 ? adobe : adobe2} alt="Adobe Stock" />
          <span>
            Limited time offer: Get 10 free Adobe Stock images. ads via Carbon
          </span>
        </figure>
      </div>
    </Container>
  );
};

export default Main;
