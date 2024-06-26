import styled from "styled-components";

export const ServicesContainer = styled.section`
  margin-top: 160px;
  position: relative;
  overflow: hidden;

  > :nth-child(1) {
    p {
      max-width: 80ch;
      margin-top: 12px;
    }

    a {
      margin-top: 20px;
    }
  }

  > :nth-child(2) {
    background-color: #030e2f;
    padding-top: 64px;
    padding-bottom: 64px;
    margin-top: 40px;
    border: 1px solid var(--border);
  }

  &::after {
    content: "";
    display: block;
    width: 800px;
    height: 100px;
    border-radius: 50%;
    opacity: 0.1;

    background-color: #53e9e9;
    box-shadow: 0 0 100px 80px #53e9e9;

    filter: blur(5px);
    -webkit-filter: blur(5px);
    -webkit-transform: translateZ(0);

    position: absolute;
    bottom: 25%;
    left: 12%;

    transform: rotate(45deg);
  }

  ul {
    display: flex;
    gap: 20px;
    overflow: hidden;

    position: relative;
    z-index: 1;
  }

  li {
    border-radius: 50px;
    border: 1px solid var(--primary-dark-50);
    padding: 40px;
    background-color: var(--black-10);

    display: flex;
    flex-direction: column;
  }

  li h3 {
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: -0.03em;
    line-height: 1.15em;
    color: var(--white);
    margin-top: 20px;
  }

  li p {
    margin-top: 12px;
  }

  li div {
    margin-top: 80px;
    flex: 1;

    display: flex;
    align-items: end;
    gap: 20px;
  }

  li div span {
    font-size: 0.875rem;
    color: var(--primary-light);
  }

  @media screen and (max-width: 1440px) {
    margin-top: 120px;

    > :nth-child(2) {
      padding-top: 40px;
      padding-bottom: 40px;
    }

    ul {
      gap: 20px;
    }
  }

  @media screen and (max-width: 1280px) {
    &::after {
      width: 1200px;
      left: 12%;
      transform: rotate(50deg);
    }

    ul {
      flex-direction: column;
    }

    li {
      border-radius: 25px;
    }

    li h3 {
      font-size: 1.75rem;
    }
  }

  @media screen and (max-width: 768px) {
    &::after {
      left: -15%;
      transform: rotate(55deg);
    }

    li {
      padding: 28px;
    }
  }

  @media screen and (max-width: 480px) {
    &::after {
      left: -95%;
      bottom: 30%;
      transform: rotate(65deg);
    }
  }
`;
