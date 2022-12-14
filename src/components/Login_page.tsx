import React, { useState } from 'react'
import { useAppDispatch } from '../redux/store'
import { Link } from 'react-router-dom'
import Popup from './Popup'
import RegistrationForm from './RegistrationForm'
import LoginButton from './LoginButton';
import '../style/login-signup-page.scss'

const Login_page = () => {

    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [warning,setWarning] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    
    const closePopup = () => setWarning(false)
    
    return (
        <div className={`auth-page`}>
            <div className='auth-page-content'>
                <h1 className='auth-header'>Login</h1>
                { warning && <Popup closePopup={closePopup}/>}
                <RegistrationForm 
                    setEmail={setEmail} 
                    email={email} 
                    setPassword={setPassword} 
                    password={password}
                />
                <LoginButton 
                    email={email}
                    password={password} 
                    setWarning={setWarning}
                />
                <div className='question'>
                    <p className='question-text'>Don't have an account ?</p>
                    <Link to='/signup' className='question-link'>
                        Sign Up
                    </Link>
                </div>        
            </div>
            <div className="--fullscreen-gradient"></div>
        </div>
    )
}
export default Login_page;