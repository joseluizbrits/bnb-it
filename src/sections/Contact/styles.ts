import styled from "styled-components";

export const ContactContainer = styled.section`
  position: relative;

  > :nth-child(2) {
    margin-top: 160px;
    display: grid;
    place-items: center;
  }

  > :nth-child(3) {
    margin-top: 160px;
    padding: 0 120px;

    display: grid;
    grid-template-columns: max-content 1fr;
    justify-content: center;
    gap: 64px;

    > div {
      margin-top: 64px;
    }

    h3 {
      font-size: var(--large);
      font-weight: 700;
      line-height: 1.15em;
      letter-spacing: -0.03em;
      color: var(--white);
      max-width: 15ch;
    }

    p {
      max-width: 38ch;
      padding-top: 16px;

      position: relative;
    }

    p::after {
      content: "";
      display: block;
      width: 0.5px;
      height: 320px;
      background-color: var(--primary-dark-50);

      position: absolute;
      bottom: -320px;
      left: 50%;
    }
  }

  a {
    position: relative;
    z-index: 1;
  }

  @media screen and (max-width: 1280px) {
    > :nth-child(3) {
      margin-top: 120px;
      padding: 0 80px;
      grid-template-columns: 1fr;
      gap: 40px;

      > div {
        margin-top: 0;
        padding-left: 80px;
      }
    }
  }

  @media screen and (max-width: 640px) {
    > :nth-child(3) {
      padding: 0;

      > div {
        padding-left: 0;
      }

      p::after {
        display: none;
      }
    }
  }
`;
