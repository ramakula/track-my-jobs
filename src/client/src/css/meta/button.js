import { colors } from '../../css/meta/index';

const buttonBlue = '#4d4dff';
const buttonBlueLight = '#6161ff';

const _defaultColor = {
  active: colors.font.light,
  hover: colors.font.light,
  normal: colors.font.light,
};

const _defaultBackgroundColor = {
  active: buttonBlueLight,
  hover: buttonBlueLight,
  normal: buttonBlue,
};

const _defaultTextDecoration = {
  active: 'underline',
  normal: 'none',
  hover: 'none',
};

const button = (
  color = _defaultColor,
  backgroundColor = _defaultBackgroundColor,
  textDecoration = _defaultTextDecoration,
) => ({
  color: color,
  backgroundColor: backgroundColor,
  textDecoration: textDecoration,
});

export default button;
