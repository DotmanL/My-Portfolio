import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url(https://fonts.google.com/specimen/Piedra?sidebar.open&selection.family=Piedra#standard-styles);
@import url(https://fonts.google.com/specimen/Niconne?slant=6&sidebar.open&selection.family=Niconne|Permanent+Marker|Piedra#standard-styles);

body {
    font-family: "Open Sans Condensed";
    padding: 0px;
    margin: 0px;
    


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
