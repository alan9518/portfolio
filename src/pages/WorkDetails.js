/* ==========================================================================
** Work Detail Page
** 24/01/2021
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Impots
// --------------------------------------
    import React, {useState, useEffect} from 'react';
    import {useHistory} from 'react-router-dom';
    import Award from '../components/awards/Award';
    import styled from 'styled-components';
    import {MovieState} from '../store/MovieState';

// --------------------------------------
// Create Component
// --------------------------------------
    const WorkDetails  = ()=> {

        const history = useHistory();
        const url = history.location.pathname;
        const [worksState, setWorksState] = useState([]);
        const [work, setWork] = useState(null);


        // ?--------------------------------------
        // ? Load API Data
        // ?--------------------------------------
        useEffect(() => {
            setWorksState(MovieState)
            const currentWork = worksState.find((stateWork)=>stateWork.url === url);
            setWork(currentWork);
        }, [worksState, url])

        // ?--------------------------------------
        // ? Render Component
        // ?--------------------------------------
        return (
            <React.Fragment>
            {work &&(
                 <DetailSStyled>
                    <HeadlineStyled>
                        <h2>{work.title}</h2>
                        <img src={work.mainImg} alt={work.title}/>
                    </HeadlineStyled>
                    <AwardsStyled>
                        {work.awards.map((award)=> (
                            <Award key = {award.title} title = {award.title} description = {award.description} />
                        ))}    
                    </AwardsStyled>
                    <ImageDisplayStyled>
                            <img src={work.secondaryImg} alt="Second Image"/>
                    </ImageDisplayStyled>
                </DetailSStyled>
                )
            }
            </React.Fragment>
        );
    }


    // --------------------------------------
    //  Styles
    // --------------------------------------
    const DetailSStyled = styled.div`
        color : #fff;
    `;

    const HeadlineStyled = styled.div`
        min-height: 90vh;
        padding-top:20vh;
        position : relative;
        h2 {
            position: absolute;
            top : 10%;
            left : 50%;
            transform : translate(-50%, -10%);
        }

        img {
            width : 100%;
            height : 70vh;
            object-fit : cover;
        }
    `;

    const AwardsStyled = styled.div`
        min-height : 50vh;
        display : flex;
        margin: 5rem 10rem;
        align-items : center;
        justify-content :space-around;
    `;

    const ImageDisplayStyled = styled.div`
        min-height : 50vh;
        img {
            width : 100%;
            height : 100vh;
            object-fit : cover;
        }
        
    `;
// --------------------------------------
// Export Component
// --------------------------------------
    export default WorkDetails;