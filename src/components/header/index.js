import { Container } from "../common/container/style";
import {
  Wrapper,
  StyledNavLink,
  StyledNav,
  StyledUl,
  
} from "./style";



const links = [
  { title: "Home", link: "/", id: 1 },
  { title: "References", link: "/references", id: 2 },
  { title: "Certificates", link: "/certificates", id: 4 },
  { title: "Projects", link: "/projects", id: 5 },
  { title: "Contacts", link: "/contacts", id: 6 },
];
function Header() {
  return (
    <Wrapper>
      <Container>
       
          <StyledNav>
            <StyledUl>
              {links.map((link) => (
                <StyledNavLink key={link.id} to={link.link}>
                  {link.title}
                </StyledNavLink>
              ))}
            </StyledUl>
          </StyledNav>
        
      </Container>
    </Wrapper>
  );
}
export default Header;
