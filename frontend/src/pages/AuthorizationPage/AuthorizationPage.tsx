import React, {useState} from 'react';

import {axiosApi} from 'api/apiInstance';
import 'css/AuthorizationPage.css';

const AuthorizationPage = (props: any) => {
    const [registrationOrLogin, setRegistrationOrLogin] = useState<boolean>(true)
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [email, setEmail] = useState<string>('')

    const registrationBtnPressed = () => {
        if (login && password && email && password === confirmPassword) {
            axiosApi.registration(login, password, email).then((res) => {
                if (res.data === 'registration completed') {
                    props.history.push('/templates');
                } else {
                    alert(res.data)
                }
            })
        } else {
            alert('enter login, password, email and confirm password')
        }
    }

    const loginBtnPressed = () => {
        if (login && password) {
            axiosApi.login(login, password).then((res) => {
                if (res.data === 'auth success') {
                    props.history.push('/templates');
                } else {
                    alert(res.data)
                }
            })
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