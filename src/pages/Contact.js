/* ==========================================================================
** Contact Page
** 24/01/2021
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Impots
// --------------------------------------
import React from 'react';
import { motion } from 'framer-motion';
import {pageAnimation, fadeAnimation, titleAnimation, lineAnimation, sliderContainer, sliderBGAnimation, scrollAnimation} from '../Animation';
import styled from 'styled-components';


// --------------------------------------
// Create Component
// --------------------------------------
const Contact = () => {

    // ?--------------------------------------
    // ? Render Component
    // ?--------------------------------------
    return (
        <ContactStyled
            exit="exit"
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            style={{ background: "#fff" }}
        >
            <TitleStyled>
                <HideStyled>
                    <motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
                </HideStyled>
            </TitleStyled>
            <div>
                <HideStyled>
                    <SocialStyled variants={titleAnimation}>
                        <CircleStyled />
                        <h2>Send Us A Message</h2>
                    </SocialStyled>
                </HideStyled>
                <HideStyled>
                    <SocialStyled variants={titleAnimation}>
                        <CircleStyled />
                        <h2>Send an email.</h2>
                    </SocialStyled>
                </HideStyled>
                <HideStyled>
                    <SocialStyled variants={titleAnimation}>
                        <CircleStyled />
                        <h2>Social Media</h2>
                    </SocialStyled>
                </HideStyled>
            </div>
        </ContactStyled>
    );
}


// --------------------------------------
// Styles
// --------------------------------------
const ContactStyled = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;
const TitleStyled = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
`;
const HideStyled = styled.div`
  overflow: hidden;
`;
const CircleStyled = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;
const SocialStyled = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

// --------------------------------------
// Export Component
// --------------------------------------
export default Contact;