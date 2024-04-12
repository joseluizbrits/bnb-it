import styled from "styled-components";

export const SolutionsContainer = styled.section`
  margin-top: 160px;
  position: relative;

  h2 {
    font-weight: 500;
    font-size: 3rem;
    color: var(--primary-light);
  }

  > p {
    font-size: 1.125rem;
    line-height: 1.5em;
    color: var(--gray-light);
    max-width: 80ch;
    margin-top: 12px;
  }

  a {
    margin-top: 20px;
  }

  > div {
    background-color: tomato;
    width: calc(100% + 240px);
    margin-left: -120px;
    background-color: #030e2f;
    padding: 80px 120px;
    margin-top: 40px;
    border: 1px solid var(--border);
  }

  > div::after {
    content: "";
    display: block;
    width: 800px;
    height: 100px;
    background-color: #53e9e9;
    border-radius: 50%;
    opacity: 0.3;

    filter: blur(120px);
    -webkit-filter: blur(120px);

    position: absolute;
    bottom: 25%;
    left: 15%;

    transform: rotate(45deg);
  }

  ul {
    display: flex;
    gap: 40px;

    position: relative;
    z-index: 1;
  }

  li {
    border-radius: 50px;
    border: 1px solid var(--primary-dark-50);
    padding: 40px;
    background-color: var(--black-10);

    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  li h3 {
    font-size: 1.75rem;
    font-weight: 600;
    color: var(--white);
    margin-top: 12px;
  }

  li p {
    font-size: 1.125rem;
    line-height: 1.5em;
    color: var(--gray-light);
    margin-top: 12px;
  }

  li div {
    margin-top: 80px;

    display: flex;
    gap: 20px;
  }

  li div span {
    font-size: 0.875rem;
    color: var(--primary-light);
  }
`;
