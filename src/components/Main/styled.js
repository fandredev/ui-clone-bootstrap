import styled from "styled-components";
import { fullCenter } from "../../global/utils";

export const Container = styled.main`
  ${fullCenter}
  padding: 3rem;
  @media (min-width: 580px) {
    padding: 5rem 4rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 35%;
    display: grid;
    align-items: flex-start;
    padding: 2rem 3rem;
  }
  @media (min-width: 1000px) {
    padding: 2rem 10rem;
  }

  text-align: center;
  > figure {
    display: flex;
    justify-content: center;
    color: #333;

    @media (min-width: 600px) {
      width: 80%;
      height: 32vh;
      flex-shrink: 0;
    }
    @media (min-width: 768px) {
      width: 86%;
      height: 33vh;
      order: 1;
      width: 100%;
    }
    @media (min-width: 1000px) {
      margin-top: 4rem;
    }
    > span {
      @media (min-width: 600px) {
        line-height: 3rem;
      }
    }
    > img {
      width: 45%;

      @media (min-width: 600px) {
        width: 40%;
      }
      @media (min-width: 768px) {
        width: 93%;
        height: 42vh;
      }
      @media (min-width: 1000px) {
        width: 80%;
        height: 47vh;
      }
    }
  }
  > div h1 {
    line-height: 4rem;
    color: var(--text);
    font-weight: normal;

    @media (min-width: 600px) {
      font-size: 5rem;
      padding: 0 2rem;
      line-height: 5rem;
    }
    @media (min-width: 768px) {
      /* order: -1; */
      text-align: left;
      padding: 0 2rem 0 0;
    }
    @media (min-width: 1000px) {
      font-size: 6rem;
      line-height: 7rem;
    }
  }
  > div {
    @media (min-width: 768px) {
      padding: 2rem;
    }
    > p {
      font-size: 2rem;
      line-height: 4rem;
      color: var(--secondary-text);
      margin: 2rem 0;
      padding: 0 2rem;
      font-weight: 400;

      @media (min-width: 768px) {
        padding: 0;
        text-align: left;
      }
      @media (min-width: 1000px) {
        padding: 0 7rem 0 0;
      }
    }
    > section {
      width: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column;

      @media (min-width: 768px) {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-flow: row;
      }
      @media (min-width: 1000px) {
        width: 55%;
      }

      > button {
        width: 100%;
        padding: 1.5rem;
        font-size: 2.2rem;
        color: #fff;
        border: 1px solid;
        border-radius: 5px;
        margin-bottom: 2rem;

        @media (min-width: 768px) {
          width: 42%;
          margin: 0 1rem;
        }

        &:first-child {
          background: var(--main);
          border-color: var(--main);

          &:hover {
            background: var(--border-btn-primary);
          }
        }
        &:last-child {
          background: #fff;
          border-color: var(--secondary);
          color: var(--secondary);
          font-weight: 600;

          &:hover {
            background-color: var(--secondary);
            border-color: var(--secondary);
            color: #fff;
          }
        }
      }
    }
    > aside {
      @media (min-width: 768px) {
        margin: 2rem 0;
        text-align: left;
      }
      > span {
        color: var(--secondary);
        font-weight: 600;
        margin-bottom: 2rem;

        @media (min-width: 600px) {
          width: 100%;
        }
        @media (min-width: 768px) {
          font-weight: normal;
        }
      }
    }
    > figure[id="adobe"] {
      background: var(--bg-adobe);

      @media (max-width: 767px) {
        display: flex;
        align-items: center;
        width: 80%;
      }
      @media (min-width: 768px) {
        display: flex;
        width: 60%;
        text-align: left;
      }
      @media (min-width: 1000px) {
        width: 50%;
      }
      &:last-child {
        padding: 2rem 0;
        margin-top: 4rem;

        @media (min-width: 375px) and (max-width: 499px) {
          display: flex;
          align-items: center;
          width: 100%;
        }
        @media (min-width: 500px) {
          display: flex;
          align-items: center;
          width: 65%;
        }
        @media (min-width: 501px) and (max-width: 1000px) {
          display: flex;
          align-items: center;
          width: 65%;
        }
      }
      > img {
        @media (max-width: 767px) {
          width: 45%;
        }
        @media (min-width: 768px) {
          width: 40%;
        }
      }
      > span {
        font-size: 14px;
        display: flex;
        padding: 0 3rem;
        line-height: 2rem;
        color: #333;
        text-align: left;
        @media (min-width: 768px) {
          padding: 0 1rem;
        }
      }
    }
  }
`;
