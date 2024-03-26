import { useEffect, useState } from 'react';
import { useLocalStorage, useMedia } from 'react-use';
import { darkTheme, lightTheme } from './themes';

export type ThemeName = 'darkly' | 'lightly' ;

type CSSLoader = () => Promise<typeof import('*?inline')> | Promise<string>;

const LazyThemeLoader: {
    [key in ThemeName]: CSSLoader;
} = {

    /* darkly: () => import('bootswatch/dist/darkly/bootstrap.min.css?inline'),
    flatly: () => import('bootswatch/dist/flatly/bootstrap.min.css?inline'), */

    // Load of dark mode done here
    darkly: () => Promise.resolve(darkTheme),
    // Load of light mode can be done here
    lightly: () => Promise.resolve(lightTheme),
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
