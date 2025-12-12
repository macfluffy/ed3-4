import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Navbar(props) {
    let activeNavStyle = {
        textDecorationColor: "green",
        textDecorationLine: "line-through"
    };

    return (
        <nav>
            <ul>
                <li><NavLink to = "/" style = {({isActive}) => isActive ? activeNavStyle : undefined}>Home</NavLink></li>
                <li><NavLink to = "/articles" style = {({isActive}) => isActive ? activeNavStyle : undefined}>Articles</NavLink></li>
                {/* <li><NavLink to = "/about" end style = {({isActive}) => isActive ? activeNavStyle : undefined}>About</NavLink></li>
                <li><NavLink to = "/about/contact" style = {({isActive}) => isActive ? activeNavStyle : undefined}>Contact</NavLink></li> */}
                {/* <li><Link to = "/">Home</Link></li>
                <li><Link to = "/about">About</Link></li>
                <li><Link to = "/about/contact">Contact</Link></li> */}
            </ul>
        </nav>
    )
}

export default Navbar;