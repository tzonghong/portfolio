import React from 'react';
import { Button } from '../../globalStyles';
import { FaLinkedin } from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';

function Footer() {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Welcome to Tan Zong Hong's Portfolio
        </FooterSubHeading>
        <Form>
          <FormInput name='email' type='email' placeholder='Your Email' />
          <Button fontBig>Contact Me</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>About Me</FooterLinkTitle>
            <FooterLink to='/resume'>Resume</FooterLink>
            <FooterLink to='/experience'>Experience</FooterLink>
            <FooterLink to='/certification'>Certification</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Contact Me</FooterLinkTitle>
            <FooterLink to='/'>Contact</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            <SocialIcon />
            Portfolio
          </SocialLogo>
          <WebsiteRights>Portfolio © 2022</WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href={'//www.linkedin.com/in/tan-zong-hong/'}
              rel='noopener noreferrer'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;