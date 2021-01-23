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
    


// --------------------------------------
// Create Component
// --------------------------------------
const AboutPage = () => {


    // ?--------------------------------------
    // ? Render Component
    // ?--------------------------------------
    return(
        <Fragment>
            <AboutSection/>
            <ServicesSection/>
            <FAQSection/>  
        </Fragment>
    )
}


// --------------------------------------
// Export Component
// --------------------------------------
export default AboutPage;