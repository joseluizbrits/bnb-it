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

  > :nth-child(1)::before {
    content: "";
    display: block;
    width: clamp(500px, 55vw, 800px);
    height: 100px;
    border-radius: 50%;
    opacity: 0.15;

    box-shadow: 0 0 80px 80px #6fefef;
    background-color: #6fefef;

    filter: blur(10px);
    -webkit-filter: blur(10px);
    -webkit-transform: translateZ(0);
    transform: translateZ(0);

    position: absolute;
    z-index: -1;
    top: -12px;
    left: 10%;
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

  @media screen and (max-width: 768px) {
    margin-top: 100px;

    > :nth-child(1)::before {
      width: 330px;
      height: 80px;
      left: 22%;
    }

    > :nth-child(2) {
      margin-top: -30%;
    }
  }

  @media screen and (max-width: 480px) {
    > :nth-child(1) {
      aspect-ratio: 3.2/4;
    }

    > :nth-child(1)::before {
      width: 240px;
      height: 40px;
      left: 18%;
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
