import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import * as u from '../utils';

import * as c from './components';

const FORM_NAME = u.formNames.email;

const style = _ => ({});

const FormEmail = props => {
  const { handleSubmit, submitting } = props;

  return (
    <div className="FormEmail" style={style()}>
      <c.FormDescription />

      <form
        onSubmit={handleSubmit(u.submit.email)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: '0 auto',
        }}
      >
        <Field
          name="email"
          label="email"
          component={c.RenderField}
          validate={[u.validation.requiredEmail, u.validation.email]}
          type="text"
        />

        <div
          className="BottomContainer"
          style={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
            margin: '10px 0',
          }}
        >
          <c.CreateAccountLink />

          <c.StyledButton
            text="next"
            customStyle={JSON.stringify({ margin: '0 0 0 auto' })}
            disabled={submitting}
          />
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    form: state.form,
  };
};

export default reduxForm({
  form: FORM_NAME,
  fields: ['email'],
})(
  connect(
    mapStateToProps,
    {},
  )(FormEmail),
);
