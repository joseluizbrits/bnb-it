import styled from "styled-components";

export const ContactContainer = styled.section`
  position: relative;

  > :nth-child(2) {
    margin-top: 160px;
    display: grid;
    place-items: center;

    span {
      font-size: var(--medium);
      color: var(--secondary-light);
    }

    h2 {
      font-weight: 700;
      font-size: var(--xx-large);
      line-height: 1.15em;
      letter-spacing: -0.03em;
      text-align: center;
      color: var(--white);
      max-width: 30ch;
      margin-top: 8px;
    }

    p {
      font-size: 1.125rem;
      line-height: 1.5em;
      text-align: center;
      color: var(--gray-mid);
      margin-top: 16px;
      max-width: 640px;
    }

    em {
      font-style: normal;
      font-weight: 600;
      color: var(--primary-light);
    }
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
      font-size: 1.125rem;
      line-height: 1.5em;
      color: var(--gray-light);
      max-width: 38ch;
      padding-top: 16px;
      padding-bottom: 36px;

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
      grid-template-columns: 1fr;
      margin-top: 120px;
      padding: 0 80px;

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
        order: 2;
      }

      p::after {
        display: none;
      }
    }
  }
`;
