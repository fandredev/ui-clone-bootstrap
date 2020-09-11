import styled from "styled-components";

export const Container = styled.section`
  padding: 1rem;
  @media (min-width: 580px) {
    padding: 1rem 3rem;
  }
  @media (min-width: 600px) {
    padding: 1rem 10rem;
  }
  @media (min-width: 768px) {
    padding: 0 5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
  > div i {
    padding: 1rem;
    background-image: linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.01)
    );
    background: var(--bg-success);
    border-radius: 0.75rem;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);

    > svg {
      margin: -3px;
      color: #fff;
      width: 30px;
      margin-top: 10rem;
    }

    &[id="cloud"] {
      background: var(--btn-secondary);
    }
    &[id="circle"] {
      background: var(--main);
    }
    &[id="water"] {
      background: var(--btn-danger);
    }
  }
  > div h2 {
    margin: 2rem 0;
    color: var(--text);
    line-height: 4rem;

    @media (min-width: 768px) {
      font-size: 3.5rem;
      font-weight: normal;
    }
  }
  > div p {
    font-size: 2rem;
    line-height: 3rem;
    color: var(--text);
    margin-bottom: 3rem;
    @media (min-width: 768px) {
      padding: 0 7rem 0 0;
    }
  }
  > div span {
    font-size: 1.5rem;
    line-height: 2.7rem;
    display: flex;
    @media (min-width: 768px) {
      padding: 0 6rem 0 0;
    }
  }
  > div button {
    @media (max-width: 500px) {
      width: 75%;
    }
    padding: 1.22rem;
    font-size: 1.8rem;
    color: var(--btn-secondary);
    border: 1px solid;
    border-radius: 5px;
    margin: 2rem 0;
    background: #fff;
    &:hover {
      background: var(--btn-secondary);
      color: #fff;
      transition: all 0.3s ease;
    }
  }
  > aside pre {
    background: #f8f9fa;
    padding: 2rem;
    code {
      /* display: block; */
      > span {
        margin: 1rem 0;
        &:first-child {
          color: var(--colors-code-title);
          display: block;
        }
        &:nth-child(3) {
          display: block;
          color: var(--colors-code-title);
        }
        > span[lang="en"] {
          color: #366;
        }
      }
    }
  }
  > aside figure img {
    width: 100%;
  }
`;
