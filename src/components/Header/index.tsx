import { FC, HTMLAttributes } from "react";
import { Container, Logo, Nav, NavLink } from "./styles";

const Header: FC<HTMLAttributes<HTMLDivElement>> = () => {
  return (
    <Container>
      <Logo src="/path/to/logo.svg" alt="Logo" />
      <Nav>
        <NavLink href="/home">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/services">Services</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </Nav>
    </Container>
  );
};

export default Header;
