import HomeIcon from "../../components/common/HomeIcon";
import { StyledDiv, StyledWrapper, StyledLink, StyledP } from "./style";
import { StyledMain, Container, Styledh2 } from "../../components/common/container/style";
import LinkedInLink from "../../components/common/LinkedInLink";
import GitHubLink from "../../components/common/GitHubLink";
import MailLink from "../../components/common/MailLink";
import FacebookLink from "../../components/common/FaceBook";
import CallLink from "../../components/common/CallLink";


function ContactsPage() {
  return (
    <>
      <Container>
        <StyledMain>
          <StyledWrapper>
            <Styledh2>Contacts</Styledh2>
          <StyledDiv>
            <HomeIcon />
            <StyledP>San Francisco, California</StyledP>
          </StyledDiv>

          <StyledDiv>
            {/* <GitHubLink />
          <a href="https://github.com/Dmytro-Yakovenko">GitHub</a>
        </StyledDiv>
        <StyledDiv>
          <MailLink />
          <a href="mailto:d.yakovenko1986@gmail.com">
            d.yakovenko1986@gmail.com
          </a> */}
            <StyledLink
              href="https://www.linkedin.com/in/dmytro-yakovenko-5b2022230/"
              target="_blank"
            >
              <LinkedInLink /> <p> LinkedIn</p>
            </StyledLink>
          </StyledDiv>
          <StyledDiv>
            <StyledLink
              href="https://github.com/Dmytro-Yakovenko"
              target="_blank"
            >
              <GitHubLink /> <p> GitHub</p>
            </StyledLink>
          </StyledDiv>
          <StyledDiv>
            <StyledLink
              href="https://www.facebook.com/dima.yakovenko.12"
              target="_blank"
            >
              <FacebookLink /> <p> FaceBook</p>
            </StyledLink>
          </StyledDiv>
          <StyledDiv>
            <StyledLink href="mailto:d.yakovenko1986@gmail.com" target="_blank">
              <MailLink /> <p> Mail</p>
            </StyledLink>
            </StyledDiv>
            <StyledDiv>
            <StyledLink href="tel:415-510-0147" target="_blank">
              <CallLink /> <p> Phone</p>
            </StyledLink>
          </StyledDiv>
          </StyledWrapper>
        </StyledMain>
      </Container>
    </>
  );
}

export default ContactsPage;
