const fontSize = '1.35rem';

const fontSizes = {
  sm: '1.15rem',

  md: fontSize,
};

const textSizes = {
  xsm: '0.75rem',
  md: fontSize,
  sm: '0.90rem',
};

const titleSizes = {
  sm: '1.95rem',
  md: '2.4rem',
};

const getTitleSize = isMobile => (isMobile ? titleSizes.sm : titleSizes.md);

export { fontSize, fontSizes, textSizes, titleSizes, getTitleSize };
