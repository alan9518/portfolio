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
import { motion } from 'framer-motion';
import { AboutContainerStyled, DescriptionStyled, HideStyled, ImageStyled } from '../../styles';


// --------------------------------------
// Create Component
// --------------------------------------
const AboutSection = () => {

    const titleAnimation = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 2 } }
    }

    const containerAnimation = {
        hidden: { x: 100 },
        show: { x: 0 , transition : {duration : 0.75, ease :"easeOut", staggerChildren : 1, when:"afterChildren"}}
    }

    // ?--------------------------------------
    // ? Render Component
    // ?--------------------------------------
    

    return (
        <AboutContainerStyled>
          <DescriptionStyled>
            <motion.div >
              <HideStyled>
                <motion.h2  >We work to make</motion.h2>
              </HideStyled>
              <HideStyled>
                <motion.h2 >
                  your <span>dreams</span> come
                </motion.h2>
              </HideStyled>
              <HideStyled>
                <motion.h2 >true.</motion.h2>
              </HideStyled>
            </motion.div>
            <p >
              Contact us for any photography or videography ideas that you have. We
              have professionals with amazing skills.
            </p>
            <button >Contact Us</button>
          </DescriptionStyled>
          <ImageStyled>
            <img  src={home1} alt="guy with a camera" />
          </ImageStyled>
        
        </AboutContainerStyled>
      );
}


// --------------------------------------
// Component Styles
// --------------------------------------

// const AboutContainerStyled = styled.div`
//     min-height : 90vh;
//     display : flex;
//     align-items:center;
//     justify-content: space-between;
//     padding : 5rem 10rem;
//     color : #fff;
// `;

// const DescriptionStyled = styled.div`
//     flex : 1;
//     padding-right : 5rem;
//     h2 {
//         font-weight: lighter;
//     }
// `;

// const ImageStyled = styled.div`
//     flex : 1;
//     overflow : hidden;
//     img{
//         width:100%;
//         height : 80vh;
//         object-fit : cover;
//     }
// `;

// const HideStyled = styled.div`
//     overflow:hidden;
// `;



// --------------------------------------
// Export Component
// --------------------------------------
export default AboutSection;