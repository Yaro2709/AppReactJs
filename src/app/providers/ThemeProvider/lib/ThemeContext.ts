import { createContext } from 'react';

export enum Theme { // перечисление наших тем
    LIGHT = 'app_light_theme',
    DARK = 'app_dark_theme',
    ORANGE = 'app_orange_theme',
}

export interface ThemeContextProps { // Значение самого контекста
    theme?: Theme; // значение самой темы
    setTheme?: (theme: Theme) => void // функция, которая устанавливает тему
}

export const ThemeContext = createContext<ThemeContextProps>({}); // создаем контекст с помощью функции createContext из React, а ThemeContextProps - интерфейс, который используется в качестве нашего контекста

export const LOCAL_STORAGE_THEME_KEY = 'theme'; // сохранять значение темы в локальное хранилище
