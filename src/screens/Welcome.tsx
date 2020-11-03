import React, {useState} from 'react';
import LaddaButton, {XS, SLIDE_UP} from 'react-ladda';
import {baseUrl} from "../constants";
import {history} from "../App";
import {connect} from 'react-redux'
import flightImage from '../assets/flight.gif';

import {saveUserDetails} from "../redux/actions";

type Props = {
    saveUserDetails: (user: object) => {};
};


export function Welcome(props: Props) {
    const [flightNumber, setFlightNumber] = useState('');
    const [lastName, setLastName] = useState('');
    const [loading, setLoading] = useState(false);
    const [lastNameError, setLastNameError] = useState('');
    const [flightNumberError, setFlightNumberError] = useState('');

    const validateForm = () => {

        let error = false;
        if (lastName === '') {
            setLastNameError("Please enter your last name")
            error = true;
        }
        if (flightNumber === '') {
            setFlightNumberError("Please enter your flight number")
            error = true;
        }
        return error
    }

    const checkIn = async (e:Event) => {
        e.preventDefault();
        if (validateForm()) return;
        setLoading(true);
        const response = await fetch(`${baseUrl}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({
                "token": "71j5cw7g_57o9FZAISCcNg",
                "data": {
                    "id": "personNickname",
                    "email": "internetEmail",
                    "name": "nameFirst",
                    "gender": "personGender",
                }
            }),
        });

        const user = await response.json();
        user.lastName = lastName
        setLoading(false);
        props.saveUserDetails(user)
        history.push('/enter-details');
    };

    return (
        <form className='welcome-page'>
            <div className='image-container'>
                <img src={flightImage} width={100}  alt={'Logo'}/>
            </div>
            <h2>Welcome to your Web Check-in</h2>
            <div className="form-group">
                <label className="label" htmlFor="flight_number">Enter flight number</label>
                <div>
                    <input type="text"
                           id={'flight_number'}
                           value={flightNumber}
                           onChange={(e) => {
                               setFlightNumberError('')
                               setFlightNumber(e.target.value)
                           }
                           }
                           placeholder="Eg: 459-934"
                           className="form-control"
                           autoFocus
                           name="flight_number"
                    />
                </div>
                <p className={'error'}>{flightNumberError}</p>
            </div>
            <div className="form-group">
                <label className="label" htmlFor="last_name">Last Name</label>
                <div>
                    <input type="text"
                           id={'last_name'}
                           value={lastName}
                           onChange={(e) => {
                               setLastNameError('')
                               setLastName(e.target.value)
                           }}
                           className="form-control"
                           name="last_name"
                    />
                </div>
                <p className={'error'}>{lastNameError}</p>
            </div>

            <LaddaButton
                loading={loading}
                onClick={checkIn}
                data-color="#eee"
                data-size={XS}
                className={'primary-button'}
                data-style={SLIDE_UP}
                data-spinner-size={30}
                data-spinner-color="#fff"
                data-spinner-lines={12}
            >
                Search Flights!
            </LaddaButton>
        </form>
    );


}

const mapDispatchToProps = {
    saveUserDetails
}

export default connect(null, mapDispatchToProps)(Welcome);
