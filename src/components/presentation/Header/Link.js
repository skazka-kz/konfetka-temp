import styled from "styled-components";

const Link = styled.a`
  text-transform: uppercase;
  padding: 0 0.9rem;
  font-weight: 700;
  text-decoration: none;
  color: #70401c;
  font-size: 1.2rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export default Link;
