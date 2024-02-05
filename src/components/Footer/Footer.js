import React from 'react';
import { AiFillGithub, AiFillBook, AiFillLinkedin } from 'react-icons/ai';

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
          <Slogan>Create & Communicate<br/>
            Learn & Innovate</Slogan>
        </CompanyContainer>

        <SocialContainer>
          <SocialIcons href="https://github.com/jlayher">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/john-e-layher/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="john_layher_resume.pdf" download="john_layher_resume.pdf" alt="Resume Download">
            <AiFillBook size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
