import React from 'react';
import successImage from '../assets/success.png';

function Success() {


    return (
        <div style={{textAlign:'center'}} className={'success-page'}>
            <img src={successImage} width={60} alt={'Success'}/>
            <h2>Your check-in is confirmed</h2>
        </div>
    );
}


export default Success;
