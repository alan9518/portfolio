/* ==========================================================================
** About Section View
** 23/01/2021
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Imports
// --------------------------------------
import React from 'react';
import styled from 'styled-components';
import home1 from '../../img/home1.png';
import Wave from '../wave/Wave';
import { titleAnimation, fadeAnimation, pictureAnimation } from '../../Animation';
import { motion } from 'framer-motion';
import { AboutContainerStyled, DescriptionStyled, HideStyled, ImageStyled } from '../../styles';


// --------------------------------------
// Create Component
// --------------------------------------
const AboutSection = () => {


    // ?--------------------------------------
    // ? Render Component
    // ?--------------------------------------


    return (
        <AboutContainerStyled>
            <DescriptionStyled>
                <motion.div >
                    <HideStyled>
                        <motion.h2 variants={titleAnimation} initial="hidden" animate="show">We work to make</motion.h2>
                    </HideStyled>
                    <HideStyled>
                        <motion.h2 variants={titleAnimation} initial="hidden" animate="show">
                            your <span>dreams</span> come
                    </motion.h2>
                    </HideStyled>
                    <HideStyled>
                        <motion.h2 variants={titleAnimation} initial="hidden" animate="show">true.</motion.h2>
                    </HideStyled>
                </motion.div>
                <motion.p variants={fadeAnimation}>
                    Contact us for any photography or videography ideas that you have. We
                    have professionals with amazing skills.
                </motion.p>
                <motion.button variants={fadeAnimation}>Contact Us</motion.button>
            </DescriptionStyled>
            <ImageStyled>
                <motion.img variants={pictureAnimation} src={home1} alt="guy with a camera" />
            </ImageStyled>
            <Wave/>
        </AboutContainerStyled>
    );
}




// --------------------------------------
// Export Component
// --------------------------------------
export default AboutSection;