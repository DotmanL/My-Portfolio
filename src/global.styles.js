import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

body {
    font-family: "Open Sans Condensed";
    padding: 0px;
    margin: 0 auto;
     background: red;


    @media screen and ( max-width: 800px) {
        padding: 0px;
    margin: 0px;
    }
}

a{
    text-decoration: none;
    color: White;
    
}
*{
    box-sizing: border-box;
}


`
