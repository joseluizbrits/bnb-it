import styled from "styled-components";

export const SwitchContainer = styled.div`
  margin-left: 20px;
  padding: 8px 12px;
  background-color: var(--black-10);
  border: 1px solid var(--border);
  border-radius: 50px;

  display: flex;
  place-items: center;

  button {
    padding: 6px 12px;
    text-transform: uppercase;
    color: var(--gray-mid);
    border-radius: 50px;
    transition: 0.1s ease;
  }

  button.active {
    font-weight: 600;
    color: var(--background);
    background-color: var(--primary-light);
    pointer-events: none;
  }

  @media screen and (min-width: 1080px) {
    button:hover {
      color: var(--gray-light);
      background-color: var(--gray-dark);
    }
  }

  @media screen and (max-width: 768px) {
    button {
      padding: 3px 6px;
      font-size: 0.75rem;
    }
  }
`;
