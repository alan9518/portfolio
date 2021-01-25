/* ==========================================================================
** About Section Page
** 23/01/2021
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Imports
// --------------------------------------
    import React, {Fragment} from 'react';
    import AboutSection from '../components/views/AboutSection';
    import ServicesSection from '../components/views/ServicesSection';
    import FAQSection from '../components/views/FaqSection';
    import {pageAnimation} from '../Animation';
    import {motion} from 'framer-motion';
    


// --------------------------------------
// Create Component
// --------------------------------------
    const AboutPage = () => {


        // ?--------------------------------------
        // ? Render Component
        // ?--------------------------------------
        return(
            <motion.div exit="exit" variants = {pageAnimation} initial = "hidden" animate = "show" >
         
                <AboutSection/>
                <ServicesSection/>
                <FAQSection/>  
            </motion.div>
        )
    }


// --------------------------------------
// Export Component
// --------------------------------------
    export default AboutPage;