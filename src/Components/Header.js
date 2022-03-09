import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Contexts/User";
import "../styles/Header.css"

const Header = () => {
    const {setLoggedInUser, loggedInUser, isLoggedIn} = useContext(UserContext)
    const handleLogout = () => {
        setLoggedInUser({})
    }
    
    return (
        <header>
            <Link to="/articles">
            <h1 className="main-title"> NC News</h1>
            </Link>
            {isLoggedIn ? <div className="navLogin"> 
            <img id="user-avatar" src={loggedInUser.avatar_url} />
            <h5>
                {loggedInUser.username}
            </h5>
            <button className="logoutButton" onClick={handleLogout}>Logout</button>
            </div> : <Link to="/Login">
            <h4 className="Login"> Login </h4>
            </Link>}
            
        </header>

    )
}

export default Header;