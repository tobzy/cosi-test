import React, {useState} from 'react';
import LaddaButton, {XS, SLIDE_UP} from 'react-ladda';
import {baseUrl} from "../constants";
import useSWR from 'swr';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

import {useHistory} from "react-router-dom";
import {connect} from "react-redux";


type Props = {
    user: any;
};


function EnterDetails(props: Props) {

    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [isUnderReview, setIsUnderReview] = useState(false);

    const additionalCountryInputs: any = {
        "Austria": [
            {placeholder: 'City', name: 'city'},
            {placeholder: 'Passport Expiry Date', name: 'passportExpiryDate'},
        ],
        "Belgium": [
            {placeholder: 'Birth Date', name: 'birthDate'},
            {placeholder: 'City', name: 'city'},
            {placeholder: 'Address', name: 'address'},
        ],
        "France": [
            {placeholder: 'Birth Date', name: 'birthDate'},
            {placeholder: 'Birth Place', name: 'birthPlace'},
            {placeholder: 'City', name: 'city'},
        ],
        "Greece": [
            {placeholder: 'Passport date of issue', name: 'passportDateOfIssue'},
            {placeholder: 'Passport expiry date', name: 'passportDateOfExpiry'},
            {placeholder: 'passport location of issue (Country)', name: 'passportCountryOfIssue'},
            {placeholder: 'passport location of issue (City)', name: 'passportCityOfIssue'},
        ],
        "Spain": [
            {placeholder: 'Address', name: 'address'}
        ],
    }
    const initialState = {
        firstName: props.user.name,
        lastName: props.user.lastName,
        country: '',
        email: props.user.email,
        phoneNumber: '',
        passportNumber: '',
        acceptTandCs: false
    }


    const validation = Yup.object().shape({
        country: Yup.string()
            .required('Country is required'),
        email: Yup.string()
            .email("Email is not valid")
            .required('Email is required'),
        phoneNumber: Yup.string()
            .required('Phone Number is required'),
        passportNumber: Yup.string()
            .required('Passport Number is required'),
        acceptTandCs: Yup.boolean().oneOf([true], 'Must Accept Terms and Conditions'),
    });


    const fetchCountries = async () => {
        const response = await fetch('https://restcountries.eu/rest/v2/all')
        return await response.json();
    }

    const {data = [], error} = useSWR('fetchCountries', fetchCountries);


    const onSubmit = (values: object) => {
        if (isUnderReview) {
            saveToServer(values);
        } else {
            setIsUnderReview(true)
        }
    }

    const saveToServer = async (values: object) => {
        setLoading(true)
        const response = await fetch(`${baseUrl}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({
                "token": "71j5cw7g_57o9FZAISCcNg",
                "data": {
                    ...values,
                    "id": "personNickname",
                    "email": "internetEmail",
                    "gender": "personGender",
                }
            }),
        });
        setLoading(false);
        history.push('/success')
        return await response.json();
    };

    // Synchronous validation function for dynamic inputs
    const validate = (value: string) => {
        let errorMessage;
        if (!value) {
            errorMessage = 'This is a required field'
        }
        return errorMessage;
    };

    return (
        <div>
            {isUnderReview ?
                <h2 className="review-form-heading">Please review your information!</h2> :
                <h2>Hi, Mr {props.user.name}!</h2>}
            <Formik
                initialValues={initialState}
                validationSchema={validation}
                onSubmit={onSubmit}
                render={(props: any) => {
                    return (
                        <Form className={isUnderReview ? "review-form" : ""}>
                            <div className="form-group">
                                <div>

                                    <Field className='form-control' name='firstName' type='text'
                                           placeholder='First Name'/>
                                    <ErrorMessage className='error' name='firstName'
                                                  component='div'/>
                                </div>
                            </div>

                            <div className="form-group">
                                <div>
                                    <Field className='form-control' name='lastName' type='text'
                                           placeholder='Last Name'/>
                                    <ErrorMessage className='error' name='lastName'
                                                  component='div'/>
                                </div>
                            </div>

                            <div className="form-group">
                                <Field className='form-control' name='country' as='select'
                                       placeholder='Select Country'
                                    // innerRef={countryInputRef}
                                >
                                    <option value={''}>Select Country</option>
                                    {data.map((country: { name: string }, index: number) => {
                                        return <option key={index} value={country.name}>{country.name}</option>
                                    })}
                                </Field>
                                <ErrorMessage className='error' name='country'
                                              component='div'/>
                            </div>

                            <div className="form-group">
                                <div>
                                    <Field className='form-control' name='email' type='email'
                                           placeholder='Email'/>
                                    <ErrorMessage className='error' name='email'
                                                  component='div'/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div>
                                    <Field className='form-control' name='phoneNumber' type='text'
                                           placeholder='Phone Number'/>
                                    <ErrorMessage className='error' name='phoneNumber'
                                                  component='div'/>
                                </div>
                            </div>

                            <div className="form-group">
                                <div>
                                    <Field className='form-control' name='passportNumber' type='text'
                                           placeholder='Passport Number'/>
                                    <ErrorMessage className='error' name='passportNumber'
                                                  component='div'/>
                                </div>
                            </div>

                            {additionalCountryInputs[props.values.country] && additionalCountryInputs[props.values.country].map((input: any, index: number) => {
                                return <div className="form-group" key={index}>
                                    <div>
                                        <Field className='form-control' name={input.name} type='text'
                                               placeholder={input.placeholder} validate={validate}/>

                                        {props.errors[input.name] && props.touched[input.name] ? (
                                            <div className={'error'}>{props.errors[input.name]}</div>
                                        ) : null}
                                    </div>
                                </div>
                            })}

                            <div className="form-group">
                                <div>
                                    <Field className='form-control' name='acceptTandCs' type="checkbox"
                                           checked={props.values.acceptTandCs}
                                           component={TermsCheckbox}/>
                                    <ErrorMessage className='error' name='acceptTandCs'
                                                  component='div'/>
                                </div>
                            </div>
                            <LaddaButton
                                loading={loading}
                                data-color="#eee"
                                data-size={XS}
                                data-style={SLIDE_UP}
                                className={'primary-button'}
                                data-spinner-size={30}
                                data-spinner-color="#fff"
                                type='submit'
                                data-spinner-lines={12}
                            >
                                {isUnderReview ? "Submit" : "Review"}
                            </LaddaButton>
                        </Form>
                    )
                }}
            />
        </div>
    );
}


function TermsCheckbox({field, type, checked}: { field: any, type: string, checked: boolean }) {
    return (
        <label>
            <input {...field} type={type} checked={checked}/>
            <span className={'terms'}>Accept T & Cs</span>
        </label>
    );
}

const mapStateToProps = (store: any) => {
    return {
        user: store.user || {}
    }
}
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(EnterDetails);
