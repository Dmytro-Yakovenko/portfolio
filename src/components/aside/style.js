import styled from "styled-components";
import { Link } from "react-router-dom";
export const StyledAside = styled.aside`
  background-image: url(https://res.cloudinary.com/dr1ekjmf4/image/upload/v1678422933/pokerEventImages/pexels-pixabay-208745_uxmaqe.jpg);
  min-height: 100vh;
  width: 25vw;
  height:100%;
  position:fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0 50px;
  justify-content: space-around;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 10;
`;
export const StyledImage = styled.img`
  border-radius: 100%;
  width: 200px;
  height: 200px;
`;
export const StyledImageWrapper = styled.div`
  min-height: 50%;
  text-align:right;
`;

export const StyledParagraf = styled.p`
  text-align: right;
  margin-top: 20px;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 1.3px;
  font-family: "Courgette", cursive;
`;

export const StyledTitle = styled.h3`
  text-align: right;
  margin-top: 20px;
  font-size: 26px;
  line-height: 24px;
  letter-spacing: 1.3px;
  font-family: "Courgette", cursive;
`;

export const StyledLinkWrapper = styled.div`
  min-height: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 30px;
  padding-bottom: 55px;
`;

export const StyledLink = styled(Link)`
  border: 2px solid rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  padding: 20px;
  background-color: transparent;
  font-size: 20px;
  gap:10px;
  &:hover {
    color: lightblue;
    border: 2px solid rgb(116, 208, 239);
  }
`;
