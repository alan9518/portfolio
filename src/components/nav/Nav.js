/* ==========================================================================
** Navigation Component
** 24/01/2021
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Imports
// --------------------------------------
    import React from 'react';
    import {Link} from 'react-router-dom';
    import styled from 'styled-components';

// --------------------------------------
// Create component
// --------------------------------------
    const Nav = ()=> {

        // ?--------------------------------------
        // ? Render Component
        // ?--------------------------------------
        return (
            <NavStyled>
                <h1 id = "logo"> <Link to = "/">Capture</Link> </h1>
                <ul>
                    <li><Link to = "/">About</Link></li>
                    <li><Link to = "/works">Our Work</Link></li>
                    <li><Link to = "/contact">Contact</Link></li>
                </ul>
            </NavStyled>
        );
    }


// --------------------------------------
// Component Styles
// --------------------------------------
    const NavStyled = styled.nav`
        min-height : 10vh;
        display : flex;
        margin : auto;
        justify-content:space-between;
        align-items : center;
        padding : 1rem 10rem;
        position : sticky;
        top : 0;
        background-color : #282828;
        z-index : 5;
        ul {
            display :flex;
            list-style : none;
        }

        li {
            padding-left : 10rem;
            position : relative;
        }

        a {
            color : #fff;
            text-decoration:none;
        }

        #logo {
            font-size : 1.5rem;
            font-family : 'lobster', sans-serif;
            font-weight : bold;
        }
        

    `;


// --------------------------------------
// export component
// --------------------------------------
    export default Nav;