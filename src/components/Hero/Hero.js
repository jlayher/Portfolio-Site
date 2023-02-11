import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  // what are these attributes? row, nopadding, main, center, etc ?  Do they come from nextJs?
  <>
  <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          {/* Change this text */}
          John Layher's <br />
          Web Developer Portfolio
        </SectionTitle>
        <SectionText>  
          {/* What are you offering to employers?  Quick Bio*/}
          Web-Developer with expertise in utilizing React.js and Angular to create beautiful, dynamic, and responsive websites.
        </SectionText>
        {/* Point to a specific section of the page, or point it to your email */}
          <Button onClick={() => window.location.href = `mailto:john.e.layher@gmail.com`}>Contact Me</Button>
      </LeftSection>
  </Section>
  </>
);

export default Hero;