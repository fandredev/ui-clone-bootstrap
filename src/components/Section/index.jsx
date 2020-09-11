import React from "react";
import { BsCode } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Container } from "./styled";
import Cloud from "../svg/Cloud";
import CircleSquare from "../svg/CircleSquare";
import Water from "../svg/Water";
import bootstrapIcons from "../../assets/images/bootstrap-icons.png";
import bootstrapThemes from "../../assets/images/bootstrap-themes.png";

const Section = () => {
  return (
    <Container>
      <div>
        <i>
          <BsCode />
        </i>
        <h2>Installation</h2>
        <p>
          Install Bootstrap’s source Sass and JavaScript files via npm,
          Composer, or Meteor.
        </p>
        <span>
          Package managed installs don’t include documentation or our full build
          scripts. You can also use our npm template repo to quickly generate a
          Bootstrap project via npm.
        </span>
        <button type="button">Read installation docs</button>
      </div>
      <aside>
        <pre>
          <code>
            <span># Via npm</span>
            <span>
              npm <span lang="en">install</span> bootstrap
            </span>

            <span># Via gem</span>
            <span>
              gem <span lang="en">install</span> bootstrap -v 4.5.2
            </span>
          </code>
        </pre>
      </aside>

      {/* Bootstrap CDN */}
      <div>
        <i id="cloud">
          <Cloud />
        </i>
        <h2>Bootstrap CDN</h2>
        <p>
          When you only need to include Bootstrap’s compiled CSS or JS, you can
          use <Link to="#">BootstrapCDN</Link>.
        </p>
        <span>
          See it in action with our simple starter template, or browse the
          examples to jumpstart your next project.
        </span>
        <button type="button">Explore the docs</button>
      </div>
      <aside>
        <pre>
          <code>
            <span>{String("<!-- CSS only -->")}</span>
            <span>link...</span>

            <span>{String("<!-- Js, Popper.js and jQuery -->")}</span>
            <span>script...</span>
          </code>
        </pre>
      </aside>
      {/* Bootstrap Icons */}
      <div>
        <i id="circle">
          <CircleSquare />
        </i>
        <h2>Bootstrap Icons</h2>
        <p>
          For the first time ever, Bootstrap has its own open source SVG icon
          library, designed to work best with our components and documentation.
        </p>
        <span>
          Bootstrap Icons are designed to work best with Bootstrap components,
          but they’ll work in any project. They’re SVGs, so they scale quickly
          and easily, can be implemented in several ways, and can be styled with
          CSS.
        </span>
        <button type="button">Get Bootstrap Icons</button>
      </div>
      <aside>
        <figure>
          <img src={bootstrapIcons} alt="Imagem dos ícones do bootstrap" />
        </figure>
      </aside>
      <div>
        {/** Oficial Themes */}

        <i id="water">
          <Water />
        </i>
        <h2>Official Themes</h2>
        <p>
          Take Bootstrap to the next level with premium themes from the official
          Bootstrap Themes marketplace.
        </p>
        <span>
          Themes are built on Bootstrap as their own extended frameworks, rich
          with new components and plugins, documentation, and powerful build
          tools.
        </span>
        <button type="button">Browser Themes</button>
      </div>
      <aside>
        <figure>
          <img src={bootstrapThemes} alt="Imagem dos temas do bootstrap" />
        </figure>
      </aside>
    </Container>
  );
};

export default Section;
