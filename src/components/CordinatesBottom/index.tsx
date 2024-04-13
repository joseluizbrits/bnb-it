"use client";

import styled from "styled-components";

export const CoordinateStyles = styled.div`
  width: fill-available;
  width: -moz-available;
  width: -webkit-fill-available;

  height: 120%;
  margin: 0 40px;
  margin-top: -180px;
  border-left: 1px solid var(--primary-dark-50);
  border-right: 1px solid var(--primary-dark-50);

  display: flex;
  gap: 500px;

  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  > div {
    width: 100%;
    height: 0.5px;
    margin-top: 56px;
    background-color: var(--primary-dark-50);
  }

  > div::before,
  > div::after {
    content: "";
    width: 56px;
    height: 0.5px;
    background-color: var(--primary-dark-50);

    position: absolute;
    top: 56px;
  }

  > div::before {
    left: -56px;
  }

  > div::after {
    right: -56px;
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
    top: 54.5px;
    z-index: 1;
  }

  &::after {
    left: -2.5px;
  }

  &::before {
    right: -2.5px;
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
