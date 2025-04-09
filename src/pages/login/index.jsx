import { useNavigate } from 'react-router';

const LoginPage = () => {
    const navigate = useNavigate();
    return(
        <> 
        <div>
            <h1>Login</h1>
        </div>
        <br />
        <button onClick={() => {
            navigate(-1)
        }}>
            back
        </button>
        <button onClick={() => {
                console.log('go to login')
                navigate('/setting/hello')
        }}>
            home
        </button>
        </>
    )
}

export default LoginPage;