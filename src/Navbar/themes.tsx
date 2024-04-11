//User defined themes are created/modified in this file

//This is where the dark theme can be modified
export const darkTheme=`
    :root {
        --color-scheme: dark;
        --bg-color: #222;
        --text-color: white;
        --primary: #375a7f;
        --secondary: #444;
        --success: #00bc8c;
        --red: #e74c3c;
        --orange: #f39c12;
        --link: #3498db;
        --primary-dark: #2c3e50;
        --secondary-dark: #95a5a6;
        --success-dark: #18bc9c;
        --table-border: #444;
        --label-bg: #2f2f2f;
        --input-bg: #191919;
        --font-family: Lato,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
        --font-size: 1rem;
        --font-weight: 400;
        --line-height: 1.5;  
    }

    body {
        margin: 0;
        font-family: var(--font-family);
        font-size: var(--font-size);
        font-weight: var(--font-weight);
        line-height: var(--line-height);
        color: var(--text-color);
        background-color: var(--bg-color);
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    .card {
        position: relative;
        border-radius: 0.5rem;
        background-color: var(--bg-color);
        color: var(--text-color);
        border: 1px solid var(--table-border);
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        display: inline-block;
        margin: 0.5rem;
        padding: 1rem;
        width: 300px;
        overflow: hidden;
        justify-content: center;
        transition: height 0.3s ease;
    }
    
    .card-header {
        display: flex;
        flex-direction: column;
        gap: 6px;
        height: 65px;
        text-align: center;
        vertical-align: center;
        justify-content: center;
        padding: 0;
        background-color: transparent;
        border: transparent;
    }

    .card-title {
        font-size: 24px;
        font-weight: 600;
        line-height: 1.25;
        letter-spacing: -0.025em;
        overflow: hidden;
        word-break: break-all;
        min-height: 30px;
        max-height: 60px;
    }
    
    .card-description {
        font-size: 12px;
        color: #6B7280;
        flex-shrink: 0;
        margin-bottom: 0.5rem;
        min-height: 0px;
    }
    
    .card-content {
        background-color: var(--table-border);
        height: 205px;
        padding: 0.5rem;
        overflow: hidden;
        white-space: normal;
        transition: height 0.5s ease;
    }

    .card-content-hidden {
        height: 0;
        overflow: hidden;
        padding: 0;
    }

    .card-description-hidden {
        height: 0;
        overflow: hidden;
        padding: 0;
    }

    .card-hovered {
        height: 300px; 
    }

    .card-content-hovered {
        height: 205px;
    }

    .card-description-hovered {
        height: auto; 
        overflow: visible;
    }
`;

//This is where the light theme can be modified
export const lightTheme=`
    :root {
        --color-scheme: light;
        --bg-color: #F9F9F9;
        --text-color: black;
        --primary: #2c3e50;
        --secondary: #95a5a6;
        --success: #18bc9c;
        --red: #e74c3c;
        --orange: #f39c12;
        --link: #3498db;
        --primary-dark: #375a7f;
        --secondary-dark: #444;
        --success-dark: #00bc8c;
        --table-border: #dee2e6;
        --label-bg: #e9e9e9;
        --input-bg: #FFF;
        --font-family: Lato,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
        --font-size: 1rem;
        --font-weight: 400;
        --line-height: 1.5;
    }

    body {
        margin: 0;
        font-family: var(--font-family);
        font-size: var(--font-size);
        font-weight: var(--font-weight);
        line-height: var(--line-height);
        color: var(--text-color);
        background-color: var(--bg-color);
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    .card {
        position: relative;
        border-radius: 0.5rem;
        background-color: var(--bg-color);
        color: var(--text-color);
        border: 1px solid var(--table-border);
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        display: inline-block;
        margin: 0.5rem;
        padding: 1rem;
        width: 300px;
        overflow: hidden;
        justify-content: center;
        transition: height 0.3s ease;
    }
    
    .card-header {
        display: flex;
        flex-direction: column;
        gap: 6px;
        height: 65px;
        text-align: center;
        vertical-align: center;
        justify-content: center;
        padding: 0;
        background-color: transparent;
        border: transparent;
    }

    .card-title {
        font-size: 24px;
        font-weight: 600;
        line-height: 1.25;
        letter-spacing: -0.025em;
        overflow: hidden;
        word-break: break-all;
        min-height: 30px;
        max-height: 60px;
    }
    
    .card-description {
        font-size: 12px;
        color: #6B7280;
        flex-shrink: 0;
        margin-bottom: 0.5rem;
        min-height: 0px;
    }
    
    .card-content {
        background-color: var(--table-border);
        height: 205px;
        padding: 0.5rem;
        overflow: hidden;
        white-space: normal;
        transition: height 0.5s ease;
    }

    .card-content-hidden {
        height: 0;
        overflow: hidden;
        padding: 0;
    }

    .card-description-hidden {
        height: 0;
        overflow: hidden;
        padding: 0;
    }

    .card-hovered {
        height: 300px; 
    }

    .card-content-hovered {
        height: 205px;
    }

    .card-description-hovered {
        height: auto; 
        overflow: visible;
    }
`;

