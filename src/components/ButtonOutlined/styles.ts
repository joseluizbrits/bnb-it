import styled from "styled-components";

export const OutlinedStyle = styled.a`
  font-size: var(--small);
  color: var(--primary-light);
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid var(--primary-light);

  transition: 0.3s ease;

  @media screen and (min-width: 1080px) {
    &:hover {
      box-shadow: 0 0 10px 5px var(--primary-light-10);
    }
  }
`;
