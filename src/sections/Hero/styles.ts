import styled from "styled-components";

export const HeroContainer = styled.section`
  width: 100%;

  display: grid;
  justify-content: center;
  position: relative;
`;

export const FirstText = styled.div`
  margin-top: 120px;
  text-align: center;

  position: relative;
  z-index: 1;

  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.25em;
    margin: 0 auto;
    max-width: 28ch;

    color: var(--white);
  }

  p {
    font-size: 1.25rem;
    line-height: 1.5em;
    color: var(--gray-mid);
    margin: 0 auto;
    margin-top: 16px;
    margin-bottom: 32px;
    max-width: 700px;
  }

  em {
    font-style: normal;
    font-weight: 600;
    color: var(--primary-light);
  }
`;

export const SecondText = styled.div`
  max-width: 1000px;
  margin-top: 140px;
  justify-self: center;

  display: grid;
  align-items: center;

  animation: showUp 1.5s ease-out forwards;

  > :nth-child(1) {
    width: 100%;
    aspect-ratio: 4/3.2;

    position: relative;
  }

  > :nth-child(1)::before,
  > :nth-child(1)::after {
    content: "";
    display: block;
    width: 600px;
    height: 200px;
    border-radius: 50%;
    opacity: 0.6;

    filter: blur(140px);
    -webkit-filter: blur(140px);

    position: absolute;
    z-index: -1;
  }

  > :nth-child(1)::before {
    background-color: #a442f0;
    top: -12px;
    left: 28px;
  }

  > :nth-child(1)::after {
    background-color: #6fefef;
    top: -12px;
    right: 28px;
  }

  > :nth-child(2) {
    margin-top: -40%;
    position: relative;
    z-index: 1;
    display: grid;
    place-items: center;
  }

  img {
    border-radius: 50px;
    object-fit: cover;
  }

  span {
    font-size: 1.5rem;
    letter-spacing: 0.05rem;
    color: var(--primary-light);
  }

  h2 {
    font-weight: 700;
    font-size: 3.5rem;
    line-height: 1.25em;
    text-align: center;
    color: var(--white);
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

  @keyframes showUp {
    from {
      scale: 0;
    }
    to {
      scale: 1;
    }
  }
`;
