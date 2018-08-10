import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import * as u from '../utils';

import * as c from './components';

import * as css from './css';

const FORM_NAME = u.formNames.email;
const PASSWORD_FORM = u.formNames.password;

export default reduxForm({
  form: FORM_NAME,
  fields: ['email'],
})(
  connect(
    state => ({ form: state.form }),
    {},
  )(props => {
    const { handleSubmit, submitting, changeComp } = props;

    const submit = async ({ email }) => {
      await u.submit.email({ email });
      changeComp(PASSWORD_FORM, email);
    };

    return (
      <div className="EmailForm" style={css.EmailForm()}>
        <c.FormDescription />

        <form onSubmit={handleSubmit(submit)} style={css.form()}>
          <Field
            component={c.RenderField}
            label="email"
            name="email"
            type="text"
            validate={[u.validation.requiredEmail, u.validation.email]}
          />

          <div className="BottomContainer" style={css.BottomContainer()}>
            <c.CreateAccountLink />

            <c.StyledButton
              customStyle={JSON.stringify({ margin: '0 0 0 auto' })}
              disabled={submitting}
              text="next"
            />
          </div>
        </form>
      </div>
    );
  }),
);
