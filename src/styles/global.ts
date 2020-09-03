import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background: #f6f6f6;
        color: #343A40;
        -webkit-font-smoothing: antialiased !important;
    }

    body, input, button {
        font-family: Roboto, sans-serif;
        font-size: 16px;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 800;
    }

    button {
        cursor: pointer;
    }

    .logo {
        width: 300px;
    }

    .logo-header {
        width: 180px;
    }

    a {
        text-decoration: none;
        color: #545454;
    }

`;
