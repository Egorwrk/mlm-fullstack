import React, {useState} from 'react';
import '../../assets/AuthorizationPage.css';

const AuthorizationPage = () => {
    const [registrOrLogin, setRegistrOrLogin] = useState<boolean>(true)
    return (
        <div className='authPageContainer'>
            <div className='formContainer'>
                <input className='inputField' placeholder='Login'></input>
                <input className='inputField' placeholder='Password'></input>
                {registrOrLogin
                    ? <input className='inputField' placeholder='Confirm password'></input>
                    : null
                }
                {registrOrLogin
                    ? <input className='inputField' placeholder='Email'></input>
                    : null
                }
                <span className='separator'/>
                <p onClick={() => setRegistrOrLogin(!registrOrLogin)} className='registrLoginToggleBtn'>{!registrOrLogin ? 'Registration' : 'Login'}</p>
                <button className='confirmBtn'>
                    <p>{registrOrLogin ? 'Registration' : 'Login'}</p>
                </button>
            </div>
        </div>
    )
}

export default AuthorizationPage