import React from "react";
import Auth from "../../components/Auth";
import Button from "../../components/Button";
import ToBegin from "../../components/ToBegin";

const Register = (props) => {
    return (
        <ToBegin>
            <Auth title="Registration">
                <input
                    type="text"
                    placeholder="First name"
                    className={`auth__input`}
                    autoComplete="off"
                />
                <input
                    type="text"
                    placeholder="Last name"
                    className={`auth__input`}
                    autoComplete="off"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className={`auth__input`}
                    autoComplete="off"
                />
                <input
                    type="text"
                    className={`auth__input auth__input_password`}
                    placeholder="Password"
                    autoComplete="off"
                />
                <input
                    type="text"
                    className={`auth__input auth__input_password`}
                    placeholder="Re-enter Password"
                    autoComplete="off"
                />
                <Button type="primary" className="auth__button">
                    <p>Register</p>
                </Button>
            </Auth>
        </ToBegin>
    );
};

export default Register;
