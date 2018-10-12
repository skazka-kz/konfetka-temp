import styled from "styled-components";

const LogoContainer = styled.div`
  background-color: #fe6321;
  display: flex;
  justify-content: center;
  height: 100px;
  border-bottom: 3px solid #70401C;

  img {
    max-width: 85%;
    margin: auto;
    max-height: 100%;
  }

  @media (min-width: 768px) {
    height: 150px;
  }
`;

export default LogoContainer;
