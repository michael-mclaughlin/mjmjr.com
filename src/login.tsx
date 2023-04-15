import React, {useState} from "react";
import { useHistory } from 'react-router-dom'
import { useAuth } from "./auth";
import { DivContainerFlex } from './components/layout/div-container-flex';
import './scss/App.scss';
import './scss/material-ui-overrides.scss';
// import {scrollToTop} from './utils/functions/scrollTo';



const Login = () => {
    // scrollToTop();
    const [password, setPassword] = useState('');
    const auth = useAuth();
    const history = useHistory();
    const handleLogin = () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        auth.login(password);
        history.push('/')
    }
    return (
        <DivContainerFlex className="auth-login-container">
            <label htmlFor="password">Password</label>
            <input id="password" type="text" onChange={(event: {target: {value: string}}) => setPassword(event.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </DivContainerFlex>
    );
};
export default Login;
