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
    import {AboutContainerStyled, DescriptionStyled, HideStyled, ImageStyled} from '../../styles';


// --------------------------------------
// Create Component
// --------------------------------------
    const AboutSection = () => {


        // ?--------------------------------------
        // ? Render Component
        // ?--------------------------------------
        return(
         <AboutContainerStyled>
            <div className="description">
            
                <DescriptionStyled>
                    <HideStyled>
                        <h2>We Work to make</h2>
                    </HideStyled>

                    <HideStyled>
                        <h2>your <span> dreams</span> come </h2>
                    </HideStyled>

                    <HideStyled>
                        <h2>true.</h2>
                    </HideStyled>

                </DescriptionStyled>

                
                 <p>Contact for info</p>
                 <button>Contact</button>
                

            </div>
            <ImageStyled>
                <img src= {home1} alt="home"/>
            </ImageStyled>
         </AboutContainerStyled>   
        )
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