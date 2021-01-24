import styled from 'styled-components';

export const AboutContainerStyled = styled.div`
        min-height : 90vh;
        display : flex;
        align-items:center;
        justify-content: space-between;
        padding : 5rem 10rem;
        color : #fff;
    `;

export const DescriptionStyled = styled.div`
        flex : 1;
        padding-right : 5rem;
        h2 {
            font-weight: lighter;
        }
    `;

export const ImageStyled = styled.div`
        flex : 1;
        overflow : hidden;
        img{
            width:100%;
            height : 70vh;
            object-fit : cover;
        }
    `;

export const HideStyled = styled.div`
    overflow:hidden;
`;