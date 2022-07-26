import  logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';
import { useUserState } from '../utilities/firebase'
import { SignInButton, SignOutButton } from './SignIn-signOut-buttons';

const NavBar = ()=>{
    const [user] = useUserState();
    return(
        <nav className="navbar sticky-top navbar-dark">
            <div className="container-fluid d-flex justify-content-around nav-height">
                <img alt='logo' className="img-fluid float-end logo" src={logo}></img>
                <Link className="navbar-brand" to="/">Home</Link>
                <Link className="navbar-brand" to="/schedule">Games</Link>
                { user ? <SignOutButton /> : <SignInButton /> }
            </div>
        </nav>
        )
}


export {NavBar}

