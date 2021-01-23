/* ==========================================================================
** About Section View
** 23/01/2021
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Imports
// --------------------------------------
    import React from 'react';
    import home1 from '../../img/home1.png';


// --------------------------------------
// Create Component
// --------------------------------------
    const AboutSection = () => {


        // ?--------------------------------------
        // ? Render Component
        // ?--------------------------------------
        return(
         <div className="aboutContainer">
            <div className="description">
            
                <div className="title">
                    <div className="hide">
                        <h2>We Work to make</h2>
                    </div>

                    <div className="hide">
                        <h2>your <span> dreams</span> come </h2>
                    </div>

                    <div className="hide">
                        <h2>true.</h2>
                    </div>

                </div>

                
                 <p>Contact for info</p>
                 <button>Contact</button>
                

            </div>
            <div className="imageContainer">
                <img src= {home1} alt="home"/>
            </div>
         </div>   
        )
    }


// --------------------------------------
// Export Component
// --------------------------------------
    export default AboutSection;