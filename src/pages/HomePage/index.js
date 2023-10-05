import React from 'react'
import Main from '../../components/Main'
import { Container, StyledMain, Styledh2 } from '../../components/common/container/style'
import { StyledP, StyledIconWrapper, StyledWrapper,} from "./style";

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
const HomePage = () => {
  return (
    <>
      <Container>
        <StyledMain>
        <Main/>
        <Styledh2>Welcome to my website</Styledh2>
        <StyledP>
          I am a driven and goal oriented professional. I recently finished the
          full stack web development program at App Academy, and my passion is
          to help build innovative and practical technologies.
          <br /> <br/>
          Proficient in Express, Sequelize, JavaScript, React/Redux, Flask,
          Python, SQLAlchemy, HTML, and CSS.
          <br /> <br/>
          I'm a highly motivated software developer who is driven to excel at
          anything that I put my mind to. <br /> <br/>
          In my free time I enjoy going on adventures and getting out into
          nature and playing soccer and guitar.
          <br /> <br/>
          Please feel free to check out my portfolio, LinkedIn, and Github for
          more information!
        </StyledP>
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



        </StyledMain>
     
      </Container>
       
    </>
  )
}

export default HomePage
