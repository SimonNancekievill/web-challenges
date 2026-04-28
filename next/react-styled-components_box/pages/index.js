import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "@/components/BoxWithStyledComponents.js";
import styled from "styled-components";

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function HomePage() {
  return (
    <>
      <BoxWrapper>
        <BoxWithClassName />
        <BoxWithClassName isBlack />
        <BoxWithStyledComponents />
        <BoxWithStyledComponents $isBlack />
      </BoxWrapper>
    </>
  );
}
