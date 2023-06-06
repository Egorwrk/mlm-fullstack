import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {axiosApi} from 'api/apiInstance';
import InputField from 'components/AuthorizationPageComponents/InputField';
import 'css/AuthorizationPage.css';

const AuthorizationPage = () => {
    const navigate = useNavigate();
    const [registrationOrLogin, setRegistrationOrLogin] = useState<boolean>(true)
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [email, setEmail] = useState<string>('')

    const registrationBtnPressed = () => {
        if (login && password && email && password === confirmPassword) {
            axiosApi.registration(login, password, email).then((res) => {
                if (res.data === 'registration completed') {
                    navigate('/main/templates');
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
                    navigate('/main/templates');
                } else {
                    alert(res.data)
                }
            })
        }
    }

    return (
        <div className='authPageContainer'>
            <div className='formContainer'>
                <InputField placeholderText={'login'} valueText={login} setter={setLogin}/>
                <InputField placeholderText={'Password'} valueText={password} setter={setPassword}/>
                {registrationOrLogin
                    ? <InputField placeholderText={'Confirm password'} valueText={confirmPassword} setter={setConfirmPassword}/>
                    : null
                }
                {registrationOrLogin
                    ? <InputField placeholderText={'Email'} valueText={email} setter={setEmail}/>
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