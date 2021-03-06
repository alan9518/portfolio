
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle `
    * {
        margin : 0;
        padding : 0;
        box-sizing : border-box;

    }


    html{
        @media (max-width: 1700px){
            font-size: 75%;
        }
        
    }

    body {
        background:#1b1b1b;
        font-family : 'Inter', sans-serif;
        overflow-x:hidden;
    }

    button {
        font-weight : bold;
        font-size : 1.1.rem;
        cursor : pointer;
        padding: 1rem 2rem;
        border : 3px solid #23d997;
        background : transparent;
        color: white;
        transition: all 0.5s ease; 
        &:hover {
            background : #23d997;
            color : white;
        }
    }

    h1 {
        color : #fff;
    }

    h2 {
        font-weight : lighter;
        font-size : 3rem;
    }

    h3 {
        color : #fff;
    }

    h4 {
        font-weight : bold;
        
    }

    a {
        font-size : 1.1.rem;
    }

    span {
        font-weight : bold;
        color : #23d997;
    }

    p {
        padding : 4rem 0rem;
        color : #ccc;
        font-size : 1.4rem;
        line-height : 150%;
    }

`


export default GlobalStyle;