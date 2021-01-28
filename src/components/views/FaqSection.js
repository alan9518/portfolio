/* ==========================================================================
** FAQ Section
** 23/01/2021
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Imports
// --------------------------------------   
import React from 'react';
import styled from 'styled-components';
import Toggle from '../toggle/Toggle';
import {AnimateSharedLayout} from 'framer-motion';
import {UseScroll} from '../scroll/UseScroll';
import {scrollAnimation} from '../../Animation';
import { AboutContainerStyled } from '../../styles';


// --------------------------------------
// Create Component
// --------------------------------------
const FAQSection = () => {

    const [element, controls ] =  UseScroll();


    // ?--------------------------------------
    // ? Render Component
    // ?--------------------------------------
    return (
        <FAQStyled variants = {scrollAnimation} ref = {element} animate={controls} initial = "hidden">
            <h2>Any Questions <span>FAQ</span> </h2>
            
            <AnimateSharedLayout> 
                <Toggle title="How Do I Start?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
                            autem accusamus ex laboriosam porro, adipisci quam voluptatum
                            magnam placeat corporis.
                        </p>
                    </div>
                </Toggle>
                <Toggle title="Daily Schedule">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error,
                            totam.
                        </p>
                    </div>
                </Toggle>
                <Toggle title="Diferrent Payment Methods">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Necessitatibus, neque.
                        </p>
                    </div>
                </Toggle>
                <Toggle title="What Products do you offer.">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Necessitatibus, neque.
                        </p>
                    </div>
                </Toggle>
            
            </AnimateSharedLayout>
        </FAQStyled>
    )

}


// --------------------------------------
// Styles
// --------------------------------------
const FAQStyled = styled(AboutContainerStyled)`

        display:block;
        span {
            display:block;
        }
        h2 {
            padding-bottom: 2rem;
            font-weight : lighter;
        }
        h4 {
            font-size : 2rem;
            font-weight : bold;
        }
        .faq-line {
            background-color: #ccc;
            height: 0.2rem;
            margin : 2rem 0rem;
            width : 100%;
        }
        .question {
            padding : 3rem 0rem;
            cursor : pointer;
        }
        .answer {
            padding :2rem 0rem;
            p {
                padding : 1rem 0rem;
            }
        }

    `;

// --------------------------------------
// Export Component
// --------------------------------------
export default FAQSection;