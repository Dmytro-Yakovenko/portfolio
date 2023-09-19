import LinkedInLink from "../LinkedInLink"
import GitHubLink from "../GitHubLink"
import FacebookLink from "../FaceBook"
import MailLink from "../MailLink"
import CallLink from "../CallLink"
import { StyledLink,SocialLinksStyledWrapper } from "./style"

function SocialLinks(){
    return (
        <SocialLinksStyledWrapper>
         <StyledLink href="https://www.linkedin.com/in/dmytro-yakovenko-5b2022230/" target="_blank">
                    <LinkedInLink/>
                </StyledLink>
                <StyledLink href="https://github.com/Dmytro-Yakovenko" target="_blank">
                    <GitHubLink/>
                </StyledLink>
                <StyledLink href="https://www.facebook.com/dima.yakovenko.12" target ="_blank">
                    <FacebookLink/>
                </StyledLink>
                <StyledLink href="mailto:d.yakovenko1986@gmail.com" target='_blank'>
                            <MailLink/>
                </StyledLink>
                <StyledLink href="tel:415-510-0147" target='_blank'>
                            <CallLink/>
                </StyledLink>
        </SocialLinksStyledWrapper>
    )
}
export default SocialLinks