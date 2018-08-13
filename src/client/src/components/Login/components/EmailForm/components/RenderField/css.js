import * as u from './utils';

const c = u.c;
const f = u.f;

export const RenderFieldComp = _ => ({
  color: c.font.subtitle,
  fontSize: f.textSizes.xsm,
});

export const RenderFieldInputComp = _ => ({
  border: 'none',
  borderBottom: `1px solid ${c.font.translucent}`,
  fontSize: f.textSizes.md,
  margin: '10px 0',
  outline: 'none',
  padding: '0',
  width: '100%',
});

export const span = _ => ({
  color: 'red',
  fontSize: f.textSizes.sm,
  fontWeight: 'bold',
});
