import React from "react";
import { useHistory } from 'react-router-dom'
import { useAuth } from "./auth";
import './scss/App.scss';

interface Props {
    children: React.ReactElement | null;
}

const RequireAuth: React.FC<Props> = (props: Props) => {
    const {children} = props;
    const auth = useAuth();
    const history = useHistory();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    if(!auth.password){
        history.push('/login');
    }
    return (
        <div>{children}</div>
    );
};
export default RequireAuth;
