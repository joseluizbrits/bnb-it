import styled from "styled-components";

export const FormContainer = styled.form`
  padding: 40px;
  border-radius: 50px;
  border: 1px solid var(--border);
  background-color: var(--black-10);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  position: relative;

  &::after {
    content: "";
    display: block;
    width: 0.5px;
    height: 120px;
    background-color: var(--primary-dark-50);

    position: absolute;
    bottom: -160px;
    left: 50%;
  }

  > span {
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.25em;
    letter-spacing: 0.05rem;
    color: var(--white);
  }

  .fields {
    margin-top: 24px;
    display: grid;
    gap: 16px;
  }

  .fields div {
    display: grid;
    gap: 8px;
  }

  input,
  textarea {
    font-size: 1rem;
    color: var(--gray-dark);

    width: 100%;
    padding: 12px 24px;
    background-color: var(--white);
    border-radius: 10px;
  }

  input::placeholder,
  textarea::placeholder {
    color: var(--gray-light);
    letter-spacing: 0.05rem;
  }

  textarea {
    height: 160px;
  }

  input.error,
  textarea.error {
    border: 2px solid var(--warning);
  }

  button {
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.05rem;
    color: var(--white);
    padding: 12px 0;
    margin-top: 4px;
    border-radius: 10px;
    background-color: var(--secondary-mid);
    transition: 0.3s ease;
  }

  button:hover {
    filter: brightness(120%);
    -webkit-filter: brightness(120%);
  }

  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  span.error {
    font-size: 0.75rem;
    color: var(--warning);
  }

  span.success {
    font-size: 1rem;
    letter-spacing: 0.05rem;
    color: var(--primary-light);
    padding-top: 8px;
  }

  span.failed {
    font-size: 0.875rem;
    color: var(--warning);
    padding-top: 8px;
  }
`;

export const Loading = styled.span`
  color: transparent;
  opacity: 0.8;

  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 6px solid var(--white);
    border-bottom-color: transparent;
    animation: loading 1s linear infinite;
  }

  @keyframes loading {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
