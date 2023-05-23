import React, {useState} from 'react';

import axios, {AxiosRequestConfig} from "axios";
import qs from 'qs';

import 'assets/AuthorizationPage.css';

const AuthorizationPage = (props: any) => {
    const [registrationOrLogin, setRegistrationOrLogin] = useState<boolean>(true)
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [email, setEmail] = useState<string>('')

    const requestDataCreator = (q: string) => {
        if (q === 'login') {
            return {
                login: login,
                password: password,
                q: q
            }
        } else {
            return {
                login: login,
                password: password,
                email: email,
                q: q
            }
        }
    }

    const axiosRequest = (requestType: 'login' | 'registration') => {
        const options: AxiosRequestConfig = {
            withCredentials: true,
            method: 'POST',
            headers: {'content-type': 'application/x-www-form-urlencoded'},
            data: qs.stringify(requestDataCreator(requestType)),
            url: `http://localhost`,
        }
        axios(options).then((res) => {
            if (requestType === 'registration' && res.data === 'registration completed' || requestType === 'login' && res.data === 'auth success') {
                props.history.push("/templates");
            } else {
                alert(res.data)
            }
        })
    }

    const registrationBtnPressed = () => {
        if (login && password && email && password === confirmPassword) {
            axiosRequest('registration')
        } else {
            alert('enter login, password, email and confirm password')
        }
    }

    const loginBtnPressed = () => {
        if (login && password) {
            axiosRequest('login')
        }
    }

    return (
        <div className='authPageContainer'>
            <div className='formContainer'>
                <input className='inputField'
                       placeholder='Login'
                       value={login}
                       onChange={(event) => setLogin(event.target.value)}
                />
                <input className='inputField'
                       placeholder='Password'
                       value={password}
                       onChange={(event) => setPassword(event.target.value)}
                />
                {registrationOrLogin
                    ? <input className='inputField'
                             placeholder='Confirm password'
                             value={confirmPassword}
                             onChange={(event) => setConfirmPassword(event.target.value)}
                    />
                    : null
                }
                {registrationOrLogin
                    ? <input className='inputField' placeholder='Email' value={email}
                             onChange={(event) => setEmail(event.target.value)}/>
                    : null
                }
                <span className='separator'/>
                <p onClick={() => setRegistrationOrLogin(!registrationOrLogin)}
                   className='registrLoginToggleBtn'>{!registrationOrLogin ? 'Registration' : 'Login'}</p>
                <button className='confirmBtn'
                        onClick={() => registrationOrLogin ? registrationBtnPressed() : loginBtnPressed()}>
                    {registrationOrLogin ? 'Registration' : 'Login'}
                </button>
            </div>
        </div>
    )
}

export default AuthorizationPage