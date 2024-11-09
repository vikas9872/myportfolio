import { React, createContext } from 'react'
import { useState, useEffect } from 'react';

export const StoreContext = createContext(null)
const StoreContextProvider = (props) => {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
      );
    
      useEffect(() => {
        // Add or remove the 'dark' class on the <html> element
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
      }, [theme]);
    
      const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
      };
    const contextValue = {
        theme,
        toggleTheme
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider
