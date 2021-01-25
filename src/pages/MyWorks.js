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
    import {pageAnimation} from '../Animation';
    import {motion} from 'framer-motion';
    import styled from 'styled-components';


// --------------------------------------
// Create Component
// --------------------------------------
const MyWorks = () => {

    // ?--------------------------------------
    // ? Render Component
    // ?--------------------------------------
    return (
        <WorkStyled exit="exit" variants = {pageAnimation} initial = "hidden" animate = "show" style ={{background : "#fff"}} >
            <MovieStyled>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link to = {"/work/the-athlete"}>
                    <img src={athlete} alt="athlete" />
                </Link>
            </MovieStyled>

            <MovieStyled>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link to = "/work/the-racer">
                    <img src={theRacer} alt="The Racer" />
                </Link>
            </MovieStyled>


            <MovieStyled>
                <h2>Good Times</h2>
                <div className="line"></div>
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
        /* background: #fff; */
        h2 {
            padding :1rem 0rem;

        }

    `;

const MovieStyled = styled.div`
        padding-bottom : 10rem;
        .line {
            height : 0.5rem;
            background: #cccccc;
            margin-bottom : 3rem;
        }

        img {
            width : 100%;
            height : 70vh;
            object-fit : cover;
        }
    `;

// --------------------------------------
// Export Component
// --------------------------------------
export default MyWorks;