import React, { memo, useRef, useState } from "react";
import Auth from "../../components/Auth";
import Button from "../../components/Button";
import { useNavigate, Link } from "react-router-dom";
import ToBegin from "../../components/ToBegin";

const url = process.env.REACT_APP_PUBLIC_URL;

const Login = (props) => {
    const navigate = useNavigate();
    const checkRef = useRef();
    const login = JSON.parse(localStorage.getItem("login"));

    const [userData, setUserData] = useState({
        email: login?.username || "",
        password: "",
    });

    const [access, setAccess] = useState({
        email: true,
        password: true,
    });

    /*------------------------------------*/

    const getUserData = (e, type) => {
        let userDataClone = Object.assign({}, userData);

        if (type === "email") {
            userDataClone.email = e.target.value;
        } else if (type === "password") {
            userDataClone.password = e.target.value;
        }
        setUserData(userDataClone);
    };

    /*------------------------------------*/

    const validate = () => {
        let emailReg = /.+@.+\.\w+/;
        let passwordReg = /[\w,\s]{6,20}/;

        let emailCondition = emailReg.test(userData.email) === true;
        let passwordCondition = passwordReg.test(userData.password) === true;

        return { emailCondition, passwordCondition };
    };

    /*------------------------------------*/

    const submit = (e) => {
        if (validate().emailCondition && validate().passwordCondition) {
            // Убираем красные линии в инпутах
            setAccess({
                email: true,
                password: true,
            });

            const request = fetch(`${url}/public/auth/login`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(userData),
            }).then((res) => res.json());

            request.then((res) => {
                const saved = Object.assign({}, res, { checked: true });

                localStorage.setItem(
                    "login",
                    JSON.stringify(checkRef.current.checked ? saved : res)
                );

                navigate("/");
            });
        } else {
            setAccess({
                email: validate().emailCondition,
                password: validate().passwordCondition,
            });
        }
    };

    /*------------------------------------*/

    return (
        <ToBegin>
            <Auth title="Sign in">
                <input
                    type="email"
                    placeholder="Email"
                    className={`auth__input ${access.email ? "" : "err"}`}
                    autoComplete="off"
                    defaultValue={login?.checked ? login?.username : ""}
                    onFocus={() =>
                        setAccess({ password: access.password, email: true })
                    }
                    onBlur={(e) => getUserData(e, "email")}
                />
                <input
                    type="text"
                    className={`auth__input auth__input_password ${
                        access.password ? "" : "err"
                    }`}
                    placeholder="Password"
                    autoComplete="off"
                    onFocus={() =>
                        setAccess({ email: access.email, password: true })
                    }
                    onBlur={(e) => getUserData(e, "password")}
                />
                <div className="auth__action">
                    <div className="auth__remember">
                        <input
                            type="checkbox"
                            id="remember"
                            ref={checkRef}
                            name="remember"
                        />
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <p className="auth__link">Forgot</p>
                </div>
                <Button
                    onClick={submit}
                    type="primary"
                    className="auth__button"
                >
                    <p>Login</p>
                </Button>
                <div className="auth__have-not-acc">
                    <p>Don't have an account?</p>
                    <Link to="/register" className="auth__link">
                        Register
                    </Link>
                </div>
            </Auth>
        </ToBegin>
    );
};

export default memo(Login);
