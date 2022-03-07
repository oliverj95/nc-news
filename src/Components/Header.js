import { Link } from "react-router-dom";
import "../styles/Header.css"

const Header = () => {
    return (
        <header>
            <Link to="/articles">
            <h1 className="main-title"> NC News</h1>
            </Link>
        </header>
    )
}

export default Header;