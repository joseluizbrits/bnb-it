import styled from "styled-components";

export const HeaderContainer = styled.header`
  margin: 20px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > a {
    display: grid;
    place-items: center;
  }

  nav {
    display: flex;
    align-items: center;
  }

  ul {
    display: flex;
  }

  .navlink {
    font-weight: 500;
    color: var(--white);
    padding: 20px;

    transition: 0.3s ease;
  }

  .navlink:hover {
    color: var(--primary-light);
  }

  @media screen and (max-width: 768px) {
    ul {
      display: none;
    }

    svg {
      scale: 0.8;
    }
  }
`;
