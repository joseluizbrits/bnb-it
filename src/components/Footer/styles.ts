import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: relative;
  overflow: hidden;

  > :nth-child(1) {
    width: 800px;
    height: 300px;

    position: absolute;
    bottom: -20px;
    left: 10%;
    z-index: -1;
  }

  > :nth-child(2) {
    padding: 40px;
    margin: 180px 40px 20px 40px;
    border-radius: 25px;
    border: 1px solid var(--border);
    background-color: var(--black-10);

    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    -webkit-transform: translateZ(0);
    transform: translateZ(0);

    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      color: var(--gray-mid);
    }

    a {
      text-decoration: underline;
      color: var(--gray-mid);
    }
  }

  @media screen and (max-width: 1080px) {
    > :nth-child(2) {
      padding: 20px;
      flex-direction: column;
      gap: 12px;

      p {
        text-align: center;
      }
    }
  }

  @media screen and (max-width: 768px) {
    > :nth-child(1) {
      left: 40px;
    }

    > :nth-child(2) {
      margin: 180px 20px 20px 20px;
    }
  }
`;
