import styled from "styled-components";
import pattern from "../../../static/candy_pattern.png";

const SectionDivider = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  background: url("${pattern}");
  z-index: -10;
`;

export default SectionDivider;
