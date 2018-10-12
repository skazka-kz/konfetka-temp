import styled from "styled-components";
import pattern from "../../../static/candy_pattern.png";

const SectionDivider = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle, white, rgba(255,0,0,0.0));
  z-index: -5;
`;

export default SectionDivider;
