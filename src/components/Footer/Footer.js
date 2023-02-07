import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:706-621-3912">706-621-3912</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:john.e.layher@gmail.com">john.e.layher@gmail.com</LinkItem>
        </LinkColumn>

      </LinkList>

      <SocialIconsContainer>
        
        <CompanyContainer>
          {/* Change this slogan */}
          <Slogan>Innovating one project at a time....  Change this</Slogan>
        </CompanyContainer>

        <SocialContainer>
          <SocialIcons href="https://github.com/jlayher">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/john-e-layher/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          {/* Add any other social media sites here */}
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
