/* ==========================================================================
** My Works Page
** 24/01/2021
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Impots
// --------------------------------------
    import React from 'react';
    import { Link } from 'react-router-dom';
    import athlete from '../img/athlete-small.png';
    import theRacer from '../img/theracer-small.png';
    import goodTimes from '../img/goodtimes-small.png';
    import {pageAnimation, fadeAnimation, pictureAnimation, lineAnimation, sliderContainer, sliderBGAnimation, scrollAnimation} from '../Animation';
    import {motion} from 'framer-motion';
    import {UseScroll} from '../components/scroll/UseScroll';
    import styled from 'styled-components';


// --------------------------------------
// Create Component
// --------------------------------------
const MyWorks = () => {

    const [element, controls] = UseScroll();
    const [element2, controls2] = UseScroll();
    const [element3, controls3] = UseScroll();

    // ?--------------------------------------
    // ? Render Component
    // ?--------------------------------------
    return (
        <WorkStyled exit="exit" variants = {pageAnimation} initial = "hidden" animate = "show" style ={{background : "#fff"}} >

            <motion.div variants = {sliderContainer}>
                <Frame1Styled variants = {sliderBGAnimation}/>
                <Frame2Styled variants = {sliderBGAnimation}/>
                <Frame3Styled variants = {sliderBGAnimation}/>
            </motion.div>
            <Frame4Styled variants = {sliderBGAnimation}/>

            <MovieStyled variants = {scrollAnimation} ref = {element} animate={controls} initial = "hidden">
                <motion.h2 variants = {fadeAnimation}>The Athlete</motion.h2>
                <motion.div className="line" variants = {lineAnimation}></motion.div>
                <Link to = {"/work/the-athlete"}>
                    <HideStyled>
                        <motion.img variants = {pictureAnimation} src={athlete} alt="athlete" />
                    </HideStyled>
                </Link>
            </MovieStyled>
       
            <MovieStyled variants = {scrollAnimation} ref = {element2} animate={controls2} initial = "hidden">
                <h2>The Racer</h2>
                <motion.div className="line" variants = {lineAnimation}></motion.div>
                <Link to = "/work/the-racer">
                    <img src={theRacer} alt="The Racer" />
                </Link>
            </MovieStyled>

    
            <MovieStyled variants = {scrollAnimation} ref = {element3} animate={controls3} initial = "hidden">
                <h2>Good Times</h2>
                <motion.div className="line" variants = {lineAnimation}></motion.div>
                <Link to = "/work/good-times">
                    <img src={goodTimes} alt="Good Times" />
                </Link>
            </MovieStyled>
    
        </WorkStyled>
    );
}



// --------------------------------------
// Styles
// --------------------------------------
const WorkStyled = styled(motion.div)`
        min-height : 100vh;
        overflow : hidden;
        padding : 5rem 10rem;
        
        h2 {
            padding :1rem 0rem;

        }

    `;

const MovieStyled = styled(motion.div)`
        padding-bottom : 10rem;
        .line {
            height : 0.5rem;
            background: #23d997;
            margin-bottom : 3rem;
        }

        img {
            width : 100%;
            height : 70vh;
            object-fit : cover;
        }
    `;


const HideStyled = styled.div`
    overflow : hidden;
`;

const Frame1Styled = styled(motion.div)`
    position : fixed;
    left : 0;
    top : 10%;
    width : 100%;
    height : 100vh;
    background : #fffebf;
    z-index : 2;
`;

const Frame2Styled = styled(Frame1Styled)`
    background : #ff9efb;
`;

const Frame3Styled =  styled(Frame1Styled)`
        background : #8ed2ff;
`;

const Frame4Styled = styled(Frame1Styled)`
    background : #8effa0;
`;

// --------------------------------------
// Export Component
// --------------------------------------
export default MyWorks;