/* ==========================================================================
**  Resusable Scroll Controller Component
** 28/01/2021
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Imports
// --------------------------------------
import React, {useState} from 'react';
import {useInView} from 'react-intersection-observer';
import {useAnimation} from 'framer-motion';


// --------------------------------------
// Create Component
// export from the start,beacuse of the []
// --------------------------------------
export const UseScroll = ()=> { 
    const controls = useAnimation();
    const [element, view] = useInView({ threshold: 0.3 });
    if (view) {
        controls.start("show");
    } else {
        controls.start("hidden");
    }
    return [element, controls];
}


