import styled from "styled-components";

export const FormContainer = styled.form`
  padding: 40px;
  border-radius: 50px;
  border: 1px solid var(--border);
  background-color: var(--black-10);

  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  -webkit-transform: translateZ(0);
  transform: translateZ(0);

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
    font-size: var(--medium);
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
    border: 2px solid transparent;

    transition: box-shadow 0.3s ease;
  }

  input::placeholder,
  textarea::placeholder {
    color: var(--gray-light);
    letter-spacing: 0.05rem;
  }

  input:focus,
  textarea:focus {
    border: 2px solid var(--secondary-light);
    box-shadow: 0 0 5px 5px var(--primary-light-10);
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
    margin-top: 12px;
    border-radius: 10px;
    background-color: var(--secondary-light);
    transition: 0.3s ease;
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

  @media screen and (min-width: 1080px) {
    input:hover,
    textarea:hover {
      box-shadow: 0 0 5px 5px var(--primary-light-10);
    }

    button:hover {
      filter: brightness(120%);
      -webkit-filter: brightness(120%);
    }
  }

  @media screen and (max-width: 1280px) {
    border-radius: 25px;
  }

  @media screen and (max-width: 768px) {
    padding: 28px;
  }

  @media screen and (max-width: 640px) {
    &::after {
      display: none;
    }

    input,
    textarea {
      padding: 10px 20px;
      border: 1px solid transparent;
    }

    input:focus,
    textarea:focus {
      border: 1px solid var(--secondary-light);
    }

    input.error,
    textarea.error {
      border: 1px solid var(--warning);
    }

    button {
      padding: 10px 0;
      margin-top: 8px;
    }
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
