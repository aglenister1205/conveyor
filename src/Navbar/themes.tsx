//User defined themes are created/modified in this file

//This is where the dark theme can be modified
export const darkTheme=`
    :root {
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
`;

//This is where the light theme can be modified
export const lightTheme=`
    :root {
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
`;

