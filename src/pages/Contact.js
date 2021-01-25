/* ==========================================================================
** Contact Page
** 24/01/2021
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Impots
// --------------------------------------
    import React from 'react';
    import {pageAnimation} from '../Animation';
    import {motion} from 'framer-motion';
    

// --------------------------------------
// Create Component
// --------------------------------------
    const Contact  = ()=> {

        // ?--------------------------------------
        // ? Render Component
        // ?--------------------------------------
        return (
            <motion.div exit="exit" variants = {pageAnimation} initial = "hidden" animate = "show" >
                <h1>Contact</h1>
            </motion.div>
        );
    }

// --------------------------------------
// Export Component
// --------------------------------------
    export default Contact;