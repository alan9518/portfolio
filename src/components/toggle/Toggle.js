/* ==========================================================================
**  Resusable Toggle Component
** 28/01/2021
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Imports
// --------------------------------------
    import React, {useState} from 'react';
    import {motion} from 'framer-motion'

// --------------------------------------
// Create Component
// --------------------------------------
    const Toggle = ({title, children})=> { 
        const [toggle, setToggle] = useState(false);
        return (
            <motion.div layout onClick={() => setToggle(!toggle)} className="question"> 
                <motion.h4 layout>{title}</motion.h4>
                { toggle ? children : null} 
                <div className="faq-line"></div>
            </motion.div>
           
        )
    }


// --------------------------------------
// Exporte Component
// --------------------------------------
    export default Toggle;
