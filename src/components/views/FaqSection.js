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
    import {AboutContainerStyled, DescriptionStyled, HideStyled, ImageStyled} from '../../styles';


// --------------------------------------
// Create Component
// --------------------------------------
    const FAQSection = () => {


        // ?--------------------------------------
        // ? Render Component
        // ?--------------------------------------
        return (
            <FAQStyled>
                <h2>Any Questions <span>FAQ</span> </h2>
                <div className="question">
                    <h4> How do I Start ?  </h4>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, voluptatum!
                    </p>
                    </div>
                </div>

                <div className="question">
                    <h4> Daily Schedule  </h4>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, voluptatum!
                    </p>
                    </div>
                    <div className="faq-line"></div>
                </div>

                <div className="question">
                    <h4> Payment Mehthods  </h4>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, voluptatum!
                    </p>
                    </div>
                    <div className="faq-line"></div>
                </div>


                <div className="question">
                    <h4> How do I Start ?  </h4>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, voluptatum!
                    </p>
                    </div>
                    <div className="faq-line"></div>
                </div>

                <div className="question">
                    <h4> What products do you offer ?  </h4>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, voluptatum!
                    </p>
                    </div>
                    <div className="faq-line"></div>
                </div>
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