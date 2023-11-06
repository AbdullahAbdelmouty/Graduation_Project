import home from "../images/home1 1.png"
import about from "../images/about (2) 1.png"
import contact from "../images/suppodrt 1.png"
import mode from "../images/night-modde 1.png"
import sign from "../images/user 1.png"
import login from "../images/log-idn 1.png"

export default function Header(){
    return(
        <div>
                <header>
            <ul className="links">
                <li className="clicked"><img src={home} alt=""/> <a  href="#home">Home</a></li>
                <li><i className="fa-sharp fa-solid fa-crown"></i> <a  href="#premium">Premium</a></li>
                <li><img src={about} alt=""/> <a  href="#about">About us</a></li>
                <li><img src={contact} alt=""/> <a  href="#contact">Contact us</a></li>
            </ul>
            <div className="form">
                <img src={mode} alt=""/>
                <div className="login"><img src={login} alt=""/> <p>Log in</p></div>
                {/* u need to change the class name but wait till u see the changes */}
                <div className="login"><img src={sign} alt=""/> <p>Sign up</p></div>
            </div>
            
        </header>
        </div>
    )
}