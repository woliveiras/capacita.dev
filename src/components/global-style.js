import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html, body {
        height: 100%;
    }
    body {
        font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
        display: flex;
        flex-direction: column;
    }
    h1, h2, h3, h4, h5, h6 {
        font-weight: 600;
    }
    main {
        flex: 1;
        max-width: 960px;
        margin: 0 auto;
    }
    li {
        padding: 5px;
    }
`
