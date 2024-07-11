import React from 'react';
import styles from './SignUpForm.module.css';
import EmailInput from "./EmailInput";

const SignUpForm = () => {
    return (
        <div className={styles.signUpForm}>
            <div className={styles.formStepActive}>

                <EmailInput />

            </div>

        </div>
    );
};

export default SignUpForm;