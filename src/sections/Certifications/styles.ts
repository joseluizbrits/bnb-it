import styled from "styled-components";

export const CertificationsContainer = styled.section`
  margin-top: 160px;

  h2 {
    font-weight: 500;
    font-size: var(--x-large);
    color: var(--primary-light);
  }

  ul {
    margin-top: 40px;
    padding-bottom: 20px;
    overflow-x: scroll;

    display: flex;
    gap: 20px;
  }

  li {
    min-width: 220px;
    background-color: var(--gray-dark);
    border: 1px solid var(--border);
    border-radius: 50%;
    flex: 1;
    aspect-ratio: 1/1;
    position: relative;
  }

  img {
    object-fit: cover;
    scale: 0.6;
  }
`;
