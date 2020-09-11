import styled from "styled-components";
import { fullCenter } from "../../global/utils";

export const Container = styled.footer`
  ${fullCenter};
  padding: 2.5rem;
  text-align: center;
  background: var(--footer-bg);
  @media (min-width: 580px) {
    text-align: left;
    padding: 0;
  }
  > div {
    width: 100%;
    @media (min-width: 800px) {
      margin-top: 8rem;
    }
    > nav ul {
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 10px 0;

      @media (min-width: 500px) {
        justify-content: flex-start;
        padding: 0 1rem;
      }

      > li {
        color: var(--secondary-text);
        margin: 0 10px;
      }
    }
  }

  > div p {
    color: var(--secondary);
    line-height: 2rem;
    font-size: 13px;
    padding: 1rem 2rem;

    @media (min-width: 580px) {
      width: 100%;
      font-size: 16px;
      line-height: 2.2rem;
    }
  }
`;
