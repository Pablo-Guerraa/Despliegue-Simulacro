import React from 'react'; 
import {
  NavLink
} from  "react-router-dom"
import { StyledHeader, StyledLogo } from '../styled/StyledHeader';

export default function Navbar() {

  const navLinkStyled = ({isActive}) => {
    return ({ 
      fontWeight: isActive ? 'bold' : 'normal',
      color: isActive ? "white" : "#a30986",
      textDecoration: isActive ? 'underline' : 'none',
    })
  } 

  return (
    <StyledHeader>
      <NavLink to="/" style={navLinkStyled}>
        <StyledLogo src="https://res.cloudinary.com/dxhgejzwc/image/upload/v1650666377/istockphoto-1026892370-1024x1024_qbkdpo.jpg" alt="logo-guayaba"/>
      </NavLink>
      <NavLink to="/Perros" style={navLinkStyled}>Inscribir a tu perro</NavLink>
      <NavLink to="/Contacto" style={navLinkStyled}>Contacto</NavLink>
    </StyledHeader>
  )
}
