import { colors } from '../css/meta/index';

const link = defaultBackgroundColor => ({
  color: {
    active: colors.font.dark,
    hover: colors.font.dark,
    normal: colors.font.light,
  },
  backgroundColor: {
    active: colors.font.light,
    hover: colors.font.light,
    normal: defaultBackgroundColor || '#ffffff',
  },
  textDecoration: {
    normal: 'none',
    hover: 'none',
    active: 'underline',
  },
});

export default link;
