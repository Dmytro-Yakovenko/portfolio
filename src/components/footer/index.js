import SocialLinks from "../common/SocialLinks"
import { StyledFooter, StyledP, FooterWrapper, Container } from "./style"



function Footer() {
    return (
        <StyledFooter>
            <Container>
                <FooterWrapper>
                <SocialLinks />
                <StyledP>
                    Powered by Dmytro Yakovenko - 2023
                </StyledP>

                </FooterWrapper>
      
                

            </Container>

        </StyledFooter>

    )
}
export default Footer