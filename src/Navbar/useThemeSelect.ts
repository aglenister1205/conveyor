import { useEffect, useState } from 'react';
import { useLocalStorage, useMedia } from 'react-use';
export type ThemeName = 'darkly' | 'lightly' ;

type CSSLoader = () => Promise<typeof import('*?inline')> | Promise<string>;

const LazyThemeLoader: {
    [key in ThemeName]: CSSLoader;
} = {
    // Customization of dark mode can be done here
    darkly: () => Promise.resolve(`
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
    `),
    // Customization of light mode can be done here
    lightly: () => Promise.resolve(`
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
    `),
};

export const useThemeSelect = () => {
    const [currentTheme, setTheme] = useLocalStorage<ThemeName | 'system'>(
        'theme',
        'system',
    );
    const [themeCSS, setThemeCSS] = useState<string | undefined>();

    const systemTheme = useMedia('(prefers-color-scheme: dark)')
        ? 'darkly'
        : 'lightly';

    useEffect(() => {
        const loadTheme = async () => {
            const themeName =
                currentTheme === 'system' ? systemTheme : currentTheme ?? 'darkly';
            const cssLoader = LazyThemeLoader[themeName];
            const css = await cssLoader();
            setThemeCSS(typeof css === 'string' ? css : css.default ?? css);
        };
        
        loadTheme();
    }, [currentTheme, systemTheme]);
        
    return {
        currentTheme,
        themeCSS,
        changeTheme: (newTheme: ThemeName) => setTheme(newTheme),
    };
};
