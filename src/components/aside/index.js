
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Button from "../common/Button";
import SocialLinks from "../common/SocialLinks";
import {StyledAside, StyledImage, StyledParagraf, StyledImageWrapper, StyledLinkWrapper, StyledTitle, StyledLink} from './style'
import { FaDownload } from 'react-icons/fa';
function Aside(){
    return (
        <StyledAside>
            <StyledImageWrapper>
            <StyledImage  src="https://res.cloudinary.com/dr1ekjmf4/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1695093724/photo_2023-09-18_20.21.27_guftvt.jpg"/>
            <StyledParagraf>Hello, my name is Dmytro.<br/> I'm , a software engineer<br/> located in San Francisco.</StyledParagraf>
            </StyledImageWrapper>

         <StyledLinkWrapper>
            <StyledTitle>Lets Get In Touch</StyledTitle>
         <SocialLinks/>
         <StyledLink to="/resume" ><FaDownload/> View resume </StyledLink>
         </StyledLinkWrapper>
      
        </StyledAside>
    )
}
export default Aside