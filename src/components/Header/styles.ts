import styled from "styled-components";

export const HeaderContainer = styled.header`
  margin: 24px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
  }

  ul :not(:last-child) a {
    font-weight: 500;
    color: var(--white);
    padding: 20px;

    transition: 0.3s ease;
  }

  ul :not(:last-child) a:hover {
    opacity: 0.8;
  }

  ul :last-child a {
    margin-left: 20px;
  }
`;
