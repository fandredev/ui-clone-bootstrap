import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  ul, li {
    list-style: none;
  }
  html {
    font-size: 62.5%;
    font-family:'AscenderSansW01-Regular', sans-serif;
    overflow-x: hidden;
  }
  button {
    cursor: pointer;
  }
  body {
    font-size: 1.6rem;
  }
  :root {
    --main:#7952b3;
    --text: #212529;
    --secondary-text:#495057;
    --white: #ffffffd9;

    --btn-primary: #7952b3;
    --border-btn-primary:#614092;
    --secondary:#6c757d;
    --bg-adobe:#0000000d;
    --yellow-fake:#ffe484;

    --bg-success:#28a745;
    --btn-secondary:#007bff;
    --btn-danger:#dc3545;
    --colors-code-title: #727272;
    --footer-bg:#f7f7f7
  }
`;
