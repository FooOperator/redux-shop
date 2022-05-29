import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html,
    body {
        margin: 0;
        padding: 0;
    }

    li {
        list-style: none;
    }
`;

export default GlobalStyle;