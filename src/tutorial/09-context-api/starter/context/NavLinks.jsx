import UserContainer from "./UserContainer"

const NavLinks = () =>{
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
            <UserContainer/>
        </nav>
    )
}

export default NavLinks