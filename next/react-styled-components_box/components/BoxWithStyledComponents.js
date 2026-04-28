import styled from "styled-components";

export default styled.div`
  width: 100px;
  height: 100px;
  margin: 2rem;
  background-color: ${(probs) => (probs.$isBlack ? "black" : "green")};
  &:hover {
    background-color: lightblue;
  }
`;
