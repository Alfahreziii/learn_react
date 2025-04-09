import { NavLink, Link, useNavigate, useParams } from 'react-router';

const HomePage = () => {
    const navigate = useNavigate();
    const params = useParams();

    console.log('params', params.name)
    
    return (
        <>
            <div>
                <h1>Welcome to the Home Page!</h1>
                <p>{params.name}</p>
            </div>

            <NavLink to="login">Go to Login</NavLink>
            <br />
            <Link to="login">Go to Login</Link>

            <button onClick={() => {
                console.log('go to login')
                navigate('/setting/login')
            }}>
                link to login
            </button>
        </>
    )
};

export default HomePage;