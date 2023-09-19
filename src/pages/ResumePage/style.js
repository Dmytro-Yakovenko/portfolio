import styled from 'styled-components';

export const StyledMain=styled.main`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

padding:100px 0 30% 80px;

`

export const StyledDiv = styled.div`
width:100%;
height:100%;
max-width:650px;
`


export const StyledImg= styled.img`
width:100%;
height:100%;
max-width:650px;
`
export const StyledLink = styled.a `
  border: 2px solid rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  padding: 20px;
  background-color: transparent;
  font-size: 20px;
  margin:20px 0;
  display:inline-block;
  cursor:pointer;
  &:hover {
    color: lightblue;
    border: 2px solid rgb(116, 208, 239);
  }
`;