import styled from "styled-components";

export const Container = styled.header`
  height: 25vh;
  color: var(--white);
  background: var(--main);

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 9% 1fr 1fr;
    align-items: center;
    height: 13vh;
    position: sticky;
    top: 0;
    z-index: 1;
  }
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 8% 43% 48%;
    height: 11vh;
  }

  > i {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 2rem;

    @media (min-width: 768px) {
      order: -1;
    }
  }
  > ol[id="links"] li a {
    color: var(--white);
    text-decoration: none;

    &:hover {
      color: #fff;
    }
  }
  > ol {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row;
    @media (min-width: 1000px) {
      justify-content: flex-end;
    }

    > li {
      margin: 0 10px;
      @media (min-width: 768px) {
        margin: 0 8px;
      }
      &:first-child {
        font-weight: 600;
      }
      & button[type="button"] {
        width: 100%;
        padding: 0.8rem;
        font-size: 1.7rem;
        color: var(--yellow-fake);
        border: 1px solid;
        border-radius: 5px;
        background: var(--main);

        &:hover {
          background: var(--yellow-fake);
          color: #2a2730;
          border-color: var(--yellow-fake);
          transition: all 0.3s ease;
        }
      }

      > svg {
        cursor: pointer;
        @media (min-width: 768px) {
          width: 2rem;
        }
        &:hover {
          color: var(--white);
        }
      }
    }
  }
`;
