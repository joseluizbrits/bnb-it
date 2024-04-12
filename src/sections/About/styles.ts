import styled from "styled-components";

export const AboutContainer = styled.section`
  width: 100%;
  position: relative;

  > :nth-child(2) {
    margin-top: 280px;
    display: grid;
    place-items: center;
  }

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
`;
