import styled from "styled-components";

export const ArrowStyle = styled.a`
  font-size: var(--small);
  color: var(--secondary-mid);
  width: max-content;

  display: flex;
  place-items: center;
  gap: 20px;

  &,
  svg {
    transition: 0.3s ease;
  }

  &:hover {
    opacity: 0.8;

    svg {
      transform: translateX(8px);
    }
  }
`;
