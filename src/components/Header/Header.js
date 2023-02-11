//allows us to link to other pages or sections
import Link from 'next/link';
import React from 'react';

//Icons
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillBook } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
// //not working??
// import { BsFileWord } from "react-icons/bs";

//Styled Components, from HeaderStyles
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link legacyBehavior href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "16px" }}>
          {/* Displays text after logo */}
          <DiCssdeck size="3rem" /> <Span>johnlayher-portfolio.com</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link legacyBehavior href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/jlayher">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/john-e-layher/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.google.com" alt="Resume Download">
        <AiFillBook size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
