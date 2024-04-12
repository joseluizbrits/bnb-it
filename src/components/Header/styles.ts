import styled from "styled-components";

export const HeaderContainer = styled.header`
  margin: 24px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

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
    opacity: 0.8;
  }
`;
