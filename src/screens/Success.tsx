import React from 'react';
import successImage from '../assets/success.png';
import LaddaButton from "react-ladda";
import {history} from "../App";

function Success() {


    return (
        <div style={{textAlign:'center'}} className={'success-page'}>
            <img src={successImage} width={60} alt={'Success'}/>
            <h2>Your check-in is confirmed</h2>
            <button onClick = {() => history.push('/')} className={'primary-button'}>Go to Home</button>
        </div>
    );
}


export default Success;
