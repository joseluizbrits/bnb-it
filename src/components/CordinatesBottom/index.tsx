"use client";

import styled from "styled-components";

export const CoordinateStyles = styled.div`
  width: fill-available;
  width: -moz-available;
  width: -webkit-fill-available;

  height: 120%;
  margin: 0 40px;
  margin-top: -120px;
  border-left: 0.5px solid var(--primary-dark-50);
  border-right: 0.5px solid var(--primary-dark-50);

  display: flex;
  gap: 500px;

  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  > div {
    width: 100%;
    height: 0.5px;
    margin-top: 40px;
    background-color: var(--primary-dark-50);
  }

  > div::before,
  > div::after {
    content: "";
    width: 40px;
    height: 0.5px;
    background-color: var(--primary-dark-50);

    position: absolute;
    top: 40px;
  }

  > div::before {
    left: -40px;
  }

  > div::after {
    right: -40px;
  }

  &::after,
  &::before {
    content: "";
    display: block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: var(--primary-light);

    position: absolute;
    top: 38.5px;
    z-index: 1;
  }

  &::after {
    left: -2.5px;
  }

  &::before {
    right: -2.5px;
  }

  @media screen and (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;

    &::after,
    &::before {
      width: 2px;
      height: 2px;
      top: 39px;
    }

    &::after {
      left: -1px;
    }

    &::before {
      right: -1px;
    }
  }

  @media screen and (max-width: 640px) {
    height: 80%;
  }
`;

function CoordinatesBottom() {
  return (
    <CoordinateStyles>
      <div />
    </CoordinateStyles>
  );
}

export default CoordinatesBottom;
