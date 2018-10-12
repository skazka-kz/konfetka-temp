import styled from "styled-components";

const LinkContainer = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0.5rem;
  padding: 0;

  a {
    border-right: 3px solid #70401c;
  }
  a:last-child {
    border: none;
  }
`;

export default LinkContainer;
