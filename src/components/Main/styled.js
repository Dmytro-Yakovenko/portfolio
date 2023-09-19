import styled from "styled-components";
import { Link } from "react-router-dom";


export const StyledH1 =styled.h1`

line-height: 2em;
font-size: 2em;
font-weight: 400;
margin: 0 0 1em 0;
`
export const StyledP=styled.p`
margin: 0 0 2em 0;
font-size: 1em;
font-weight: 400;

line-height: 1em;
`
export const StyledLink= styled(Link)`

    border: rgb(0,0,0) solid 1px;
    text-decoration:none;
    display:inline-block;
    padding:10px;
    margin-right:20px;
    cursor:pointer;
    color:#000;
    &:hover {
        
        border-color:#34b7eb;
        color:#34b7eb
      }
`
