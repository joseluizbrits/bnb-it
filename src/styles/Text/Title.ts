import styled from "styled-components";

export const TitleLabel = styled.span<{ $secondary?: boolean }>`
  font-size: var(--medium);
  color: ${({ $secondary }) =>
    $secondary ? "var(--secondary-light)" : "var(--primary-light)"};
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: var(--xx-large);
  line-height: 1.15em;
  letter-spacing: -0.03em;
  text-align: center;
  color: var(--white);
  max-width: 30ch;
  margin-top: 8px;
`;

export const TitleParagraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.5em;
  text-align: center;
  color: var(--gray-mid);
  margin-top: 16px;
  max-width: 640px;

  em {
    font-style: normal;
    font-weight: 600;
    color: var(--primary-light);
  }
`;
