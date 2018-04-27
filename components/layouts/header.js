import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.ul`
  list-style: none;
  padding-left: 0px;
`;
const NavList = styled.li`
  display: inline-block;
`;
const NavLink = styled.a`
  display: inline-block;
  padding: 8px 15px;
  cursor: pointer;
`;

const NavItem = props => (
  <NavList>
    <Link href={props.href}>
      <NavLink>{props.title}</NavLink>
    </Link>
  </NavList> 
);

const Header = () => (
  <Nav className="list list-inline">
    <NavItem title="HOME" href="/" />
    <NavItem title="ABOUT" href="/about" />
    <NavItem title="CONTACT" href="/contact" />
    <NavItem title="BLOG" href="/blog" />
  </Nav>
)

export default Header;