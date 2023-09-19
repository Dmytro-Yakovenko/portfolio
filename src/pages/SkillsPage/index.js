import React from "react";
import { StyledIconWrapper, StyledWrapper, CertificateWrapper, CertificateImage, CertificateContainer } from "./style";
import { StyledMain, Container, Styledh2 } from "../../components/common/container/style";
import { ReactComponent as ReactIcon } from "../../components/common/icons/react.svg";
import { ReactComponent as CSS3Icon } from "../../components/common/icons/css3.svg";
import { ReactComponent as FlaskIcon } from "../../components/common/icons/flask.svg";
import { ReactComponent as GitIcon } from "../../components/common/icons/git.svg";
import { ReactComponent as HTML5Icon } from "../../components/common/icons/html5.svg";
import { ReactComponent as JavaScriptIcon } from "../../components/common/icons/javascript.svg";
import { ReactComponent as MaterialuiIcon } from "../../components/common/icons/materialui.svg";
import { ReactComponent as MySQLIcon } from "../../components/common/icons/mysql.svg";
import { ReactComponent as NodeJSIcon } from "../../components/common/icons/nodejs.svg";
import { ReactComponent as PythonIcon } from "../../components/common/icons/python.svg";
import { ReactComponent as SequelizeIcon } from "../../components/common/icons/sequelize.svg";
import { ReactComponent as ReduxIcon } from "../../components/common/icons/redux.svg";
import { ReactComponent as SQLAlchemyIcon } from "../../components/common/icons/sqlalchemy.svg";
import { ReactComponent as DockerIcon } from "../../components/common/icons/docker.svg"
import { ReactComponent as SQLiteIcon } from "../../components/common/icons/sqlite.svg"

const Skills = () => {
  return (
    <Container>
      <StyledMain>
        <div>
          <Styledh2>
          Skills
          </Styledh2>
         

          <StyledWrapper>
            <StyledIconWrapper>
              <CSS3Icon />
            </StyledIconWrapper>
          
         
            <StyledIconWrapper>
              <FlaskIcon />
            </StyledIconWrapper>
          
         
            <StyledIconWrapper>
              <GitIcon />
            </StyledIconWrapper>
        
            <StyledIconWrapper>
              <HTML5Icon />
            </StyledIconWrapper>
          
            <StyledIconWrapper>
              <JavaScriptIcon />
            </StyledIconWrapper>
          
            <StyledIconWrapper>
              <MaterialuiIcon />
            </StyledIconWrapper>
         
            <StyledIconWrapper>
              <MySQLIcon />
            </StyledIconWrapper>
         
            <StyledIconWrapper>
              <NodeJSIcon />
            </StyledIconWrapper>
         
            <StyledIconWrapper>
              <PythonIcon />
            </StyledIconWrapper>
         
            <StyledIconWrapper>
              <ReactIcon />
            </StyledIconWrapper>
         
            <StyledIconWrapper>
              <ReduxIcon/>
            </StyledIconWrapper>
       
            <StyledIconWrapper>
              <SequelizeIcon />
            </StyledIconWrapper>
        
            <StyledIconWrapper>
              <SQLAlchemyIcon />
            </StyledIconWrapper>

            <StyledIconWrapper>
              <DockerIcon/>
            </StyledIconWrapper>

            <StyledIconWrapper>
              <SQLiteIcon/>
            </StyledIconWrapper>

            </StyledWrapper>
            </div>
        <CertificateWrapper >
           <Styledh2>Certificates</Styledh2>
           <CertificateContainer>

           <CertificateImage src="https://res.cloudinary.com/dr1ekjmf4/image/upload/v1694748786/SWE_PT_September_2022_Grad_-4_mcnaqq.png" alt="certificate App Academy"/>
             <CertificateImage src="https://res.cloudinary.com/dr1ekjmf4/image/upload/v1694658882/download_wstqgt.png" alt="certficate Hacker Rank Java Script Basic"/>
            <CertificateImage src="https://res.cloudinary.com/dr1ekjmf4/image/upload/v1694749241/download_2_zg7sba.png" alt="Hack Ranker Problem Solving Basic "/>
            <CertificateImage src="https://res.cloudinary.com/dr1ekjmf4/image/upload/v1694749392/download_3_lbazys.png" alt="Hack Ranker React Basic"/>


           </CertificateContainer>
            
        </CertificateWrapper>
           
      </StyledMain>
    </Container>

   
  );
};

export default Skills;
