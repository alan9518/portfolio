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
    import styled from 'styled-components';
    import {scrollAnimation} from '../../Animation';
    import {UseScroll} from '../scroll/UseScroll';
    import { AboutContainerStyled, DescriptionStyled, ImageStyled } from '../../styles';


// --------------------------------------
// Create Component
// --------------------------------------
const ServicesSection = () => {

    const [element, controls] = UseScroll();
   
    
    // ?--------------------------------------
    // ? Render Component
    // ?--------------------------------------
    return (
        <ServicesStyled variants = {scrollAnimation} ref = {element} animate={controls} initial = "hidden">
            <DescriptionStyled>
                <h2>Hight <span>quality </span> services </h2>
                <CardsStyled>
                    <CardStyled>
                        <div className="icon">
                            <img src={clock} alt="" />
                            <h3>Efficient</h3>
                        </div>
                        <p className = "serviceText">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </CardStyled>

                    <CardStyled>
                        <div className="icon">
                            <img src={teamwork} alt="section icon" />
                            <h3>Teamwork</h3>
                        </div>
                       <p className = "serviceText">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </CardStyled>

                    <CardStyled>
                        <div className="icon">
                            <img src={diaphragm} alt="section icon" />
                            <h3>Diaphgram</h3>
                        </div>
                       <p className = "serviceText">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </CardStyled>

                    <CardStyled>
                        <div className="icon">
                            <img src={money} alt="section icon" />
                            <h3>Affordable</h3>
                        </div>
                       <p className = "serviceText">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </CardStyled>
                </CardsStyled>
            </DescriptionStyled>

            <ImageStyled>
                <img src={home2} alt="section icon" />
            </ImageStyled>

        </ServicesStyled>
    )

}


// --------------------------------------
// Styles
// --------------------------------------
const ServicesStyled = styled(AboutContainerStyled)`

        h2 {
            padding-bottom : 5rem;
        }

        p {
            width : 70%;
            padding:2rem 0rem 4rem 0rem;
            font-size : 1.1rem;
        }

    `;


const CardsStyled = styled.div`
        display:flex;
        flex-wrap: wrap;
    `;


const CardStyled = styled.div`
        flex-basis : 12rem;
        .icon {
            display: flex;
            align-items : center;
            h3 {
                margin-left :1rem;
                background-color: #fff;
                color : #000000;
                padding : 0.3rem;
            }
            .serviceText {
                font-size : 1.1rem;
            }
        }
        
    `;


// --------------------------------------
// Export Component
// --------------------------------------
export default ServicesSection;