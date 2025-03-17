import styled from "styled-components";

export const BreadcrumbWrapper = styled.nav`

  padding: 40px 0;
  font-size: 14px;
  color: #00174f;
  display: none;
  align-items: center;
  flex-wrap: wrap;

  @media(max-width: 700px) {
    font-size: 12px;
  }

  @media(min-width: 560px) {
    display: flex;
  }

`;


export const Separator = styled.span`
  margin: 0 8px;
  color: #00174f;
`;

export const BreadcrumbLink = styled.a`
  text-decoration: none;
  color: #00174f;
  text-wrap: nowrap;

  &:hover {
    text-decoration: underline;
  }
`;

export const BreadcrumbText = styled.span`
  font-weight: bold;
  color: #00174f;
`;


