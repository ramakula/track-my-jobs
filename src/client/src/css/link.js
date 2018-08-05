import { colors } from '../css/meta/index';

const _defaultColor = {
  active: colors.font.dark,
  hover: colors.font.dark,
  normal: colors.font.light,
};

const _defaultBackgroundColor = {
  active: colors.font.light,
  hover: colors.font.light,
  normal: colors.font.light,
};

const _defaultTextDecoration = {
  normal: 'none',
  hover: 'none',
  active: 'underline',
};

const link = (
  defaultBackgroundColor,
  color = _defaultColor,
  backgroundColor = _defaultBackgroundColor,
  textDecoration = _defaultTextDecoration,
) => ({
  color: color,
  backgroundColor: {
    active: colors.font.light,
    hover: colors.font.light,
    normal: defaultBackgroundColor || '#ffffff',
  },
  textDecoration: textDecoration,
});

export default link;
