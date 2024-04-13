import styled from "styled-components";

export const HeroContainer = styled.section`
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
    font-weight: 800;
    line-height: 1.15em;
    letter-spacing: -0.03em;
    margin: 0 auto;
    max-width: 28ch;

    color: var(--white);
  }

  p {
    font-size: 1.125rem;
    line-height: 1.5em;
    color: var(--gray-mid);
    margin: 0 auto;
    margin-top: 16px;
    margin-bottom: 36px;
    max-width: 700px;
  }

  em {
    font-style: normal;
    font-weight: 600;
    color: var(--primary-light);
  }

  @media screen and (max-width: 768px) {
    margin-top: 100px;

    h1 {
      font-size: 2.75rem;
    }
  }

  @media screen and (max-width: 480px) {
    h1 {
      font-size: 2.25rem;
    }

    p {
      margin-bottom: 20px;
    }

    > a {
      display: block;
      padding: 10px 20px;
    }
  }
`;

export const SecondText = styled.div`
  max-width: 1000px;
  margin-top: 140px;
  justify-self: center;

  display: grid;
  align-items: center;

  animation: growUp 1.5s ease-out forwards;

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
    display: grid;
    place-items: center;

    position: relative;
    z-index: 1;
  }

  img {
    border-radius: 50px;
    object-fit: cover;
  }

  span {
    font-size: var(--medium);
    color: var(--primary-light);
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

  @media screen and (max-width: 768px) {
    margin-top: 100px;

    > :nth-child(1)::before,
    > :nth-child(1)::after {
      width: 330px;
      height: 80px;
    }

    > :nth-child(2) {
      margin-top: -30%;
    }
  }

  @media screen and (max-width: 480px) {
    > :nth-child(1) {
      aspect-ratio: 3.2/4;

      &::before {
        left: 0;
      }
    }

    > :nth-child(2) {
      margin-top: -55%;
    }
  }

  @keyframes growUp {
    from {
      scale: 0.8;
      transform: translateY(100px);
    }
    to {
      scale: 1;
      transform: translateY(0);
    }
  }
`;
