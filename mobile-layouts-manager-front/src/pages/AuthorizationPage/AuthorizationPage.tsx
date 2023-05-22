import React, {useState} from 'react';
import axios, {AxiosRequestConfig} from "axios";
import qs from 'qs';

import 'assets/AuthorizationPage.css';

const AuthorizationPage = (props: any) => {
    const [registrOrLogin, setRegistrOrLogin] = useState<boolean>(true)
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [email, setEmail] = useState<string>('')

    const registrationBtnPressed = () => {
        if (login && password && email && password === confirmPassword) {
            const userData = {
                login: login,
                password: password,
                email: email,
                q: 'registration'
            }
            const options: AxiosRequestConfig = {
                method: 'POST',
                headers: {'content-type': 'application/x-www-form-urlencoded'},
                data: qs.stringify(userData),
                url: `http://localhost`,
            }
            axios(options).then((res) => {
                if (res.data === 'registration completed') {
                    props.history.push("/templates");
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
            const userData = {
                login: login,
                password: password,
                q: 'login'
            }
            const options: AxiosRequestConfig = {
                method: 'POST',
                headers: {'content-type': 'application/x-www-form-urlencoded'},
                data: qs.stringify(userData),
                url: `http://localhost`,
            }
            axios(options).then((res) => {
                if (res.data == 'auth success') {
                    props.history.push("/templates");
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
                {registrOrLogin
                    ? <input className='inputField'
                             placeholder='Confirm password'
                             value={confirmPassword}
                             onChange={(event) => setConfirmPassword(event.target.value)}
                    />
                    : null
                }
                {registrOrLogin
                    ? <input className='inputField' placeholder='Email' value={email}
                             onChange={(event) => setEmail(event.target.value)}/>
                    : null
                }
                <span className='separator'/>
                <p onClick={() => setRegistrOrLogin(!registrOrLogin)}
                   className='registrLoginToggleBtn'>{!registrOrLogin ? 'Registration' : 'Login'}</p>
                <button className='confirmBtn'
                        onClick={() => registrOrLogin ? registrationBtnPressed() : loginBtnPressed()}>
                    <p>{registrOrLogin ? 'Registration' : 'Login'}</p>
                </button>
            </div>
        </div>
    )
}

export default AuthorizationPage