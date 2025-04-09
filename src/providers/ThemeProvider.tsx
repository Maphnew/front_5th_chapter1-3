import React, { useState, PropsWithChildren } from "react";
import { Theme, ThemeContextType } from "../types";
import { useMemo, useCallback } from "../@lib";
import { ThemeContext } from "../context";

const ThemeProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [theme, setTheme] = useState<Theme>("light");

    const toggleTheme = useCallback(() => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
      }, []);

    const themeContextValue: ThemeContextType = useMemo(
        () => ({
            theme,
            toggleTheme,
        }),
        [theme, toggleTheme]
    );
    
    return (
        <ThemeContext.Provider value={themeContextValue}>
            <div className={`min-h-screen ${theme === "light" ? "bg-gray-100" : "bg-gray-900 text-white"}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}

export default ThemeProvider