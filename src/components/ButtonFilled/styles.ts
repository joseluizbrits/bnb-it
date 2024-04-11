import styled from "styled-components";

export const FilledStyle = styled.a`
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 0.05rem;
  color: var(--primary-dark);
  background: var(--primary-gradient);
  padding: 12px 24px;
  border-radius: 10px;

  transition: 0.3s ease;

  &:hover {
    filter: saturate(200%);
  }
`;
