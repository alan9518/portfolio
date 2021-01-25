/* ==========================================================================
** Award Component
** 24/01/2021
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Impots
// --------------------------------------
    import React from 'react';
    import styled from 'styled-components';
// --------------------------------------
// Create Component
// --------------------------------------
    const Award  = ({title, description})=> {

        // ?--------------------------------------
        // ? Render Component
        // ?--------------------------------------
        return (
            <AwardStyled>
                <h3>{title && title}</h3>
                <div className="line"></div>
                <p>{description && description}</p>
            </AwardStyled>
        );
    }


// --------------------------------------
// Styles
// --------------------------------------  
    const AwardStyled = styled.div`
        padding : 1rem;
        h3 {
            font-size : 1.2rem;
        }
        p {
            padding : 2rem 0rem;
            font-size : 1.2rem;
            text-align : center;
        }
        .line {
            width : 30%;
            background : #23d997;
            height : 0.5rem;
            margin: 0.5rem 0rem;
        }
    `;

// --------------------------------------
// Export Component
// --------------------------------------
    export default Award;