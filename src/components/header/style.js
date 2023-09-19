import styled from "styled-components"
import { NavLink } from "react-router-dom"
export const Wrapper=styled.header`
height:80px;
position:fixed;
background-color:grey;
width:calc(100vw - 30%);
padding-left:30%;
align-items:center;
display:flex;
justify-content:center;
z-index:5;
`
export const StyledNavLink = styled(NavLink)`
font-size:18px;
padding:10px;
margin-left:5px;
text-transform: uppercase;
color:#FFFFFF;
text-decoration:none;
cursor:pointer;
&:hover{color:rgb(0,0,0)};
`
export const StyledNav = styled.nav`
display:flex;
width:100%;
justify-content:center;
align-items:center;
margin-left:5%;

`

export const StyledUl=styled.ul`

display:flex;
justify-content:flex-end;

`
export const SocialLinksWrapper=styled.div`
display:flex;
justify-content:flex-end;
width:18vw;

`