import React from 'react'
import { createContext } from 'react';

export const ThemeContext=createContext({
    themeMode:'light',
    lightTheme:()=>{},
    darkTheme:()=>{}
});

export const ThemeContextProvider=ThemeContext.Provider;
