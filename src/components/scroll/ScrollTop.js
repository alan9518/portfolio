/* ==========================================================================
** Scroll to top of the page
** 28/01/2021
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Imports
// --------------------------------------
    import React, {useEffect} from 'react';
    import {useLocation} from 'react-router-dom';


// --------------------------------------
// Create Component
// --------------------------------------
    const ScrollTop = () => {
        const {pathname} = useLocation();
        
        useEffect(()=> {
            window.scroll({
                top : 0,
                left : 0
            })
        },[pathname])

        return (null);
        
    }


export default ScrollTop;