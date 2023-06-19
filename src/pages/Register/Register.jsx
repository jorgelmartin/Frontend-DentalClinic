
import React from 'react';
import './Register.css';
import { ChangeView } from '../../common/ChangeView/ChangeView';


export const Register = () => {
    return (
        <div className='registerDesign'>
            <ChangeView
                path={"/"}
                name={"Home"}
            />
            <ChangeView
                path={"/login"}
                name={"Login"}
            />
        </div>
    )
}