import styled from "styled-components";

export const FilledStyle = styled.a`
  font-size: var(--small);
  font-weight: 600;
  letter-spacing: 0.05rem;
  color: var(--primary-dark);
  background: var(--primary-gradient);
  padding: 12px 24px;
  border-radius: 10px;

  transition: 0.3s ease;

  @media screen and (min-width: 1080px) {
    &:hover {
      filter: saturate(200%);
    }
  }
`;
