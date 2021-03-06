import styled from "styled-components";

const Credits = styled.div`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 50px;

  svg {
    margin-top: 10px;
  }

  @media screen and (min-width: 771px) {
    display: flex;
    align-items: center;
    letter-spacing: 1px;
    margin-left: auto;
    margin-top: initial;
    flex-direction: row;

    svg {
      margin-left: 15px;
      margin-top: initial;
    }
  }
`;

export default Credits;
