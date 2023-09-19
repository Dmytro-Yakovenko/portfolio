import React from 'react'
import { StyledButton } from './style'
const Button = ({text, icon}) => {
  return (
    <StyledButton>{icon} {text}</StyledButton>
    
  )
}

export default Button