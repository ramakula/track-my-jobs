export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'invalid email address'
    : undefined;

export const requiredEmail = value =>
  value || typeof value === 'number'
    ? undefined
    : 'please enter an email address';

export const required = value =>
  value || typeof value === 'number' ? undefined : 'required field';
