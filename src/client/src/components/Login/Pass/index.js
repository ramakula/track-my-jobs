import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm, Field, getFormValues } from 'redux-form';

import * as u from '../utils';
import * as a from '../../../actions';

import * as c from './components';

const FORM_NAME = u.formNames.pass;
const EMAIL_FORM = u.formNames.email;

const style = _ => ({});

const FormPass = props => {
  const { handleSubmit, submitting, values, history } = props;

  const submit = async ({ password }, dispatch) => {
    return dispatch(
      a.u.authenticate(
        await u.submit.password({ email: values.email, password }),
        history,
      ),
    );
  };

  return (
    <div className="FormPass" style={style()}>
      <c.FormDescription values={values} />

      <form
        onSubmit={handleSubmit(submit)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: '0 auto',
        }}
      >
        <Field
          name="password"
          label="enter your password"
          component={c.RenderField}
          validate={[u.validation.requiredPassword]}
          type="password"
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
          <c.ForgotPasswordLink />

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
    values: getFormValues(`${EMAIL_FORM}`)(state),
  };
};

export default reduxForm({
  form: FORM_NAME,
  fields: ['password'],
})(
  connect(
    mapStateToProps,
    {},
  )(withRouter(FormPass)),
);
