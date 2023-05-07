import tw from "twin.macro";
import styled from "styled-components";

export const StyledDefaultLayout = styled.div.attrs({
  className: "StyledDefaultLayout",
})`
  ${tw`block pl-14 lg:(flex pl-2) h-screen overflow-x-hidden`}
`;
