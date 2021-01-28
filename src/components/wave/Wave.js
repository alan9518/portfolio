/* ==========================================================================
** Wave Animation Component
** 25/01/2021
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Imports
// --------------------------------------
    import React from 'react';
    import styled from 'styled-components';
    import {motion} from 'framer-motion';


// --------------------------------------
// Create Component
// --------------------------------------
    const Wave = ()=> {
        return (
            <WaveStyled  viewBox="0 0 1440 363" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path 
                    initial = {{pathLength : 0, pathOffset : 1}}
                    animate = {{pathLength : 1, pathOffset : 0}}
                    transition = {{duration : 1}}
                    d="M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5" 
                    stroke="#D96ED4" 
                    strokeOpacity="0.3" 
                    strokeWidth="10"/>
            </WaveStyled>

        )
    }



    const WaveStyled = styled.svg`
        position : absolute;
        top : 33%;
        left :0;
        width : 100%;
        z-index: 1;
    `

// --------------------------------------
// Export Component
// --------------------------------------
    export default Wave;