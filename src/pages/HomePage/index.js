import React from 'react'
import Main from '../../components/Main'
import { Container, StyledMain, Styledh2 } from '../../components/common/container/style'
import { StyledP } from "./style";
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
        </StyledMain>
     
      </Container>
       
    </>
  )
}

export default HomePage
