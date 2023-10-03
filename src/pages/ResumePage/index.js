import React from "react";
import { StyledDiv, StyledMain, StyledImg, StyledLink } from "./style";
import { Container } from "../../components/common/container/style";
import { FaDownload } from 'react-icons/fa';

const ResumePage = () => {
  return (
    <StyledMain>
      <Container>
        <StyledDiv>
        <StyledLink title="Downloadresume" target="_blanc" href="https://drive.google.com/file/d/1NCHnOgeU7WhKzHUqIOTxQHp_6nT_Ee3B/view?usp=sharing" ><FaDownload/> Download resume </StyledLink>
          <StyledImg src="https://res.cloudinary.com/dr1ekjmf4/image/upload/v1695180308/DmytroYakovenkoResume_2_1_uhv7ap.png" />
        </StyledDiv>
      </Container>
    </StyledMain>
  );
};

export default ResumePage;
