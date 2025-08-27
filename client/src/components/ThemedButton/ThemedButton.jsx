import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeProvider';

function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
      }}
    >
      Current theme: {theme}
    </button>
  );
}

export default ThemedButton;