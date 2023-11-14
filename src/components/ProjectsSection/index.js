import React from 'react'
import {StyledImg, StyledA, StyledP, StyledDiv, StyledWrapper} from './styled'
import {Styledh2} from '../common/container/style'

const ProjectsSection = () => {
  return (
    <StyledWrapper>
      <Styledh2>Projects</Styledh2>

      <StyledImg src='https://res.cloudinary.com/dr1ekjmf4/image/upload/v1692852394/Screen_Shot_2023-08-23_at_9.43.56_PM_qye5lt.png'/>
      <StyledDiv>
      <StyledA target = "_blanc" href="https://foodterest-bgx4.onrender.com/">Live Site</StyledA>
      <StyledA target = "_blanc" href="https://github.com/Dmytro-Yakovenko/solo-clone-flask">Git Hub Repo</StyledA>
      </StyledDiv>
     
      <StyledP>
      Pinterest clone
This Pinterest-Clone project allows logged-in users to create, update and delete pins and boards. Users can create boards of a specific category and browse through a selection of pins in which they can save to an associated board.



      </StyledP>


      <StyledImg src='https://res.cloudinary.com/dr1ekjmf4/image/upload/v1692888231/Screen_Shot_2023-08-24_at_7.42.37_AM_f1dw7j.png'/>
      <StyledDiv>
      <StyledA target = "_blanc" href="https://splitwise-aiek.onrender.com/">Live Site</StyledA>
      <StyledA target = "_blanc" href="https://github.com/Dmytro-Yakovenko/SplitSmart">Git Hub Repo</StyledA>
      </StyledDiv>
     
      <StyledP>
      Splitwise clone
SplitSmart, a Splitwise clone, is a website for users to keep track of their shared expenses and balances with housemates, trips, groups, friends, and family.



      </StyledP>
     
      <StyledImg src='https://res.cloudinary.com/dr1ekjmf4/image/upload/v1692888568/Screen_Shot_2023-08-24_at_7.49.15_AM_nt1pmt.png'/>
      <StyledDiv>
      <StyledA target = "_blanc" href="https://meet-up-xsr0.onrender.com/">Live Site</StyledA>
      <StyledA target = "_blanc" href="https://github.com/Dmytro-Yakovenko/MeetUp">Git Hub Repo</StyledA>
      </StyledDiv>
     
      <StyledP>
      Meet Up clone
      This Meetup clone project was programmed to allow users to create, update, and delete groups and events. A user can add events to groups and chronologically lists them from upcoming to past events.



      </StyledP>
      </StyledWrapper>
  )
}

export default ProjectsSection