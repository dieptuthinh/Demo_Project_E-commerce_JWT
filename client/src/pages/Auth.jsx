import LoginForm from '../components/auth/LoginForm'
import RegisterForm from '../components/auth/RegisterFrom'
import { AuthContext } from '../contexts/AuthContext'
import { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
// nhan authRoute tu 2 thang login va register 
const Auth = ({ authRoute }) => {
    const { authState: { authLoading, isAuthenticated } } = useContext(AuthContext)

    let body

    if (authLoading)
        body = (
            <div className="container">
                <div className='d-flex justify-content-center align-items-center mt-2'>
                    <Spinner animation='border' variant='info' />
                </div>
            </div>

        )
    else if (isAuthenticated) return <Redirect to='/cart' />
    else
        body = (
            <>
                {authRoute === 'login' && <LoginForm />}
                {authRoute === 'register' && <RegisterForm />}
            </>
        )

    return (
        <div className='landing'>
            <div className='dark-overlay'>
                <div className='landing-inner'>
                    {body}
                </div>
            </div>
        </div>
    )
}

export default Auth
