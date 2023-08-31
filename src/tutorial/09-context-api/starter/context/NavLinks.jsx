import UserContainer from "./UserContainer"

const NavLinks = ({user, logout}) =>{
    return (
        <nav className="nav-container">
            <ul className="nav-links">
                <li className="link">
                    <a href="#">Home</a>
                </li>
                <li className="link">
                    <a href="#">About</a>
                </li><li className="link">
                    <a href="#"></a>
                </li>
            </ul>
            <UserContainer user ={user} logout={logout}/>
        </nav>
    )
}

export default NavLinks