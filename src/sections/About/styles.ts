import styled from "styled-components";

export const AboutContainer = styled.section`
  width: 100%;
  position: relative;

  > :nth-child(2) {
    margin-top: 280px;
    display: grid;
    place-items: center;

    span {
      font-size: 1.5rem;
      letter-spacing: 0.05rem;
      color: var(--secondary-mid);
    }

    h2 {
      font-weight: 700;
      font-size: 3.5rem;
      line-height: 1.25em;
      text-align: center;
      color: var(--white);
      max-width: 32ch;
    }

    p {
      font-size: 1.25rem;
      line-height: 1.5em;
      text-align: center;
      color: var(--gray-mid);
      margin-top: 12px;
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

    display: flex;
    justify-content: center;
    gap: 80px;

    h3 {
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 1.25em;
      color: var(--white);
      max-width: 15ch;
    }

    p {
      font-size: 1.25rem;
      line-height: 1.5em;
      color: var(--gray-light);
      max-width: 38ch;
      padding-top: 12px;
      padding-bottom: 32px;

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
`;
