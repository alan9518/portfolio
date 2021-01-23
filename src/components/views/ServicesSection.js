/* ==========================================================================
** Services Section
** 23/01/2021
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Imports
// --------------------------------------   
    import React from 'react';
    import clock from '../../img/clock.svg';
    import diaphragm from '../../img/diaphragm.svg';
    import money from '../../img/money.svg';
    import teamwork from '../../img/teamwork.svg';
    import home2 from '../../img/home2.png';


// --------------------------------------
// Create Component
// --------------------------------------
    const ServicesSection = () => {


        // ?--------------------------------------
        // ? Render Component
        // ?--------------------------------------
        return (
            <div className="servicesContainer">
                <div className="description">
                    <h2>Hight <span>quality </span> services </h2>
                    <div className="cardsContainer">
                        <div className="card">
                            <div className="icon">
                                <img src={clock} alt=""/>
                                <h3>Efficient</h3>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </p>
                        </div>

                        <div className="card">
                            <div className="icon">
                                <img src={teamwork} alt="section icon"/>
                                <h3>Teamwork</h3>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </p>
                        </div>

                        <div className="card">
                            <div className="icon">
                                <img src={diaphragm} alt="section icon"/>
                                <h3>Diaphgram</h3>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </p>
                        </div>

                        <div className="card">
                            <div className="icon">
                                <img src={money} alt="section icon"/>
                                <h3>Affordable</h3>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </p>
                        </div>
                    </div>
                </div>

                <div className="imageContainer">
                    <img src={home2} alt="section icon"/>
                </div>

            </div>
        )

    }


// --------------------------------------
// Export Component
// --------------------------------------
    export default ServicesSection;