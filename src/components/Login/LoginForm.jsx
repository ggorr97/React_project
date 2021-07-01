import React from 'react';
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {

    return (
        <div className={'d-flex justify-content-center align-content-center'}>
            <form onSubmit={props.handleSubmit} className={'w-50 d-flex justify-content-center flex-column'}>
                <h1 >Login</h1>
                <div className={'mt-3'}>
                    <Field component={"input"} type={'text'} className={"form-control w-50"} name={'login'} placeholder={"Enter email"}/>
                </div>
                <div className={'mt-3'}>
                    <Field component={"input"} type={'password'} className={"form-control w-50"} name={'pass'} placeholder={"Password"}/>
                </div>
                <div className={'mt-2 form-check'}>
                    <Field component={"input"} type={'checkbox'} className={"form-check-input"} name={'rememberMe'} id={"exampleCheck1"}/>
                    <label className={"form-check-label"} htmlFor={"exampleCheck1"}>Remember me</label>
                </div>
                <div className={'mt-1 '}>
                    <button type={"submit"} className={"btn btn-primary w-25 mt-3"}>Submit</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({form:'login'}) (LoginForm)

export default LoginReduxForm;