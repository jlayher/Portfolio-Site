import React from 'react';
import { DiFirebase, DiReact, DiZend, DiJavascript1, DiScrum } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <><Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    {/* Give your Tech Description here.  A Focus on Front-End Frameworks, Experince going fullstacka nd backend, and basic communication tools */}
    <SectionText>
      Experienced in developing Full-Stack Web Applications, with a focus on Front-End UI/UX work, utilizing the popular frameworks React.js and Angular.
    </SectionText>
    <List>

      {/* Languages */}
      <ListItem>
        <DiJavascript1 size="3rem" />
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            Experience with: <br />
            -HTML <br />
            -CSS & SCSS <br />
            -JavaScript & TypeScript
          </ListParagraph>
        </ListContainer>
      </ListItem>

      {/* Frameworks */}
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Frameworks</ListTitle>
          <ListParagraph>
            Experience with: <br />
            -React.js <br />
            -Angular <br />
            -Next.js <br />
            -Bootstrap <br />
            -Express.js
          </ListParagraph>
        </ListContainer>
      </ListItem>

      {/* Back-end/Databses */}
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End/Databases</ListTitle>
          <ListParagraph>
            Experience with: <br />
            -Node.js <br />
            -Experss.js <br />
            -SQL Databases <br />
            -Sequelize(ORM)
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>

        {/* Version Control, add github or SCRUM icon */}
        <DiScrum size="3rem" />
        <ListContainer>
          <ListTitle>Version Control/Agile</ListTitle>
          <ListParagraph>
            Experience with: <br />
            -Figma <br />
            -Git/Github <br />
            -Jira <br />
            -SCRUM <br />
            -MS Teams
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider />
  </Section>
    </>
);

export default Technologies;
