import styled from "styled-components";

export const CoordinatesTopContainer = styled.div`
  width: 100%;
  height: 90%;
  padding: 0 40px;
  margin-top: calc(24px + 40px);
  border-top: 1px solid var(--primary-dark-50);

  display: flex;
  gap: 500px;

  position: absolute;
  top: 0;
  left: 0;

  &::before,
  &::after {
    content: "";
    width: 56px;
    height: 0.5px;
    background-color: var(--primary-dark-50);

    position: absolute;
    top: -1px;
  }

  &::before {
    left: -56px;
  }

  &::after {
    right: -56px;
  }

  div {
    flex: 1;
    margin-top: -56px;
    position: relative;
    animation: rain 3s ease-in-out forwards;
    animation-delay: 0.5s;
  }

  div::before,
  div::after {
    content: "";
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: var(--primary-light);
    opacity: 0;

    position: absolute;
    top: 54px;
    z-index: 1;

    animation: grow 1s ease-in-out forwards;
    animation-delay: 1.7s;
  }

  div::before {
    left: -2.5px;
  }

  div::after {
    right: -2.5px;
  }

  @keyframes rain {
    0% {
      height: 0%;
      border-left: 1px solid var(--primary-dark-50);
      border-right: 1px solid var(--primary-dark-50);
    }
    30% {
      border-left: 1px solid var(--primary-light-50);
      border-right: 1px solid var(--primary-light-50);
    }
    100% {
      height: 100%;
      border-left: 1px solid var(--primary-dark-50);
      border-right: 1px solid var(--primary-dark-50);
    }
  }

  @keyframes grow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
