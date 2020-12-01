import styled from "styled-components";
import Paper from "@material-ui/core/Paper";

const Page = styled(Paper)`
  box-sizing: border-box;
  min-width: 100vh;
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  font-family: "Raleway", sans-serif;
  justify-content: flex-start;
`;

export default Page;
