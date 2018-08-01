const fontFamily = `  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;
const fontSize = '1.4rem';

const fontSizes = {
  md: fontSize,
  sm: '1.15rem',
};

const titleSizes = {
  sm: '1.95rem',
  md: '2.4rem',
};

const getTitleSize = isMobile => (isMobile ? titleSizes.sm : titleSizes.md);

export { fontFamily, fontSize, fontSizes, titleSizes, getTitleSize };
