import { useEffect } from 'react';
import { useTheme } from '@local_modules/AppConfig/ThemeContext';

const FontConfig = () => {
  const { font } = useTheme();

  useEffect(() => {
    if (!font) return;

    const style = document.createElement('style');

    // Generate @font-face rules dynamically
    const fontFaces = Object.entries(font).map(([weight, url]) => `
      @font-face {
        font-family: 'Pretendard';
        font-weight: ${weight};
        src: url('${url}') format('opentype');
      }
    `).join('\n');

    // Add default font-family rule
    const defaultFontFamily = `
      body {
        font-family: 'Pretendard', sans-serif;
      }
    `;

    style.innerHTML = `${fontFaces}\n${defaultFontFamily}`;

    document.head.appendChild(style);

    // Clean up function to remove the style element when the component unmounts
    return () => {
      document.head.removeChild(style);
    };
  }, [font]);

  return null;
};

export default FontConfig;