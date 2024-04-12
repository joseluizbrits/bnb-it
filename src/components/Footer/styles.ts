import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: relative;

  > svg {
    position: absolute;
    bottom: -20px;
    left: 10%;
    z-index: -1;
  }

  > div {
    padding: 40px;
    margin: 180px 40px 20px 40px;
    border-radius: 25px;
    border: 1px solid var(--primary-dark-50);
    background-color: var(--gray-dark-10);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      display: flex;
      gap: 4px;
    }

    p {
      color: var(--gray-mid);
    }

    a {
      text-decoration: underline;
      color: var(--gray-mid);
    }
  }
`;
