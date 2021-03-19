import React from 'react'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/register">About Us</FooterLink>
                                <FooterLink to="/register">How it works</FooterLink>
                                <FooterLink to="/register">Careers</FooterLink>
                                <FooterLink to="/register">Test</FooterLink>
                                <FooterLink to="/register">Clients</FooterLink>
                                <FooterLink to="/register">Contact</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/register">About Us</FooterLink>
                                <FooterLink to="/register">How it works</FooterLink>
                                <FooterLink to="/register">Careers</FooterLink>
                                <FooterLink to="/register">Test</FooterLink>
                                <FooterLink to="/register">Clients</FooterLink>
                                <FooterLink to="/register">Contact</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/register">About Us</FooterLink>
                                <FooterLink to="/register">How it works</FooterLink>
                                <FooterLink to="/register">Careers</FooterLink>
                                <FooterLink to="/register">Test</FooterLink>
                                <FooterLink to="/register">Clients</FooterLink>
                                <FooterLink to="/register">Contact</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/register">About Us</FooterLink>
                                <FooterLink to="/register">How it works</FooterLink>
                                <FooterLink to="/register">Careers</FooterLink>
                                <FooterLink to="/register">Test</FooterLink>
                                <FooterLink to="/register">Clients</FooterLink>
                                <FooterLink to="/register">Contact</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            GRIP
                        </SocialLogo>
                        <WebsiteRights>GRIP © {new Date().getFullYear()}
                        All Rights Reserves.</WebsiteRights>

                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
