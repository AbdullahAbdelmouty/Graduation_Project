import home from "../images/home1 1.png"
import about from "../images/about (2) 1.png"
import contact from "../images/suppodrt 1.png"
import mode from "../images/night-modde 1.png"
// import sign from "../images/user 1.png"
// import login from "../images/log-idn 1.png"
import userIcon from "../images/account (2) 2.png"
import passIcon from "../images/losscfk 1.png"
import { useEffect } from "react"
import {useNavigate} from "react-router-dom"


export default function Header(props){
    const navigate = useNavigate();
    useEffect(() => {
        let dropLogIn = document.querySelector(".form .drop-login");
        let logIn = document.querySelector(".form .login");
        function showDrop() {
            if (dropLogIn) {
                dropLogIn.style.display = "block";
            }
        }
        
        function hideDrop() {
            if (dropLogIn) {
                dropLogIn.style.display = "none";
            }
        }
        
        if(props.text==="Log in"){

            if (logIn) {
                logIn.addEventListener("click", (event) => {
                    event.stopPropagation(); // Prevent the click event from propagating to the document
                    showDrop();
                });
            }
            
            document.addEventListener("click", () => {
                hideDrop();
            });
        }
        if(props.text==="Log out"){

            const handleButtonClick = () => {
                // Navigate to the 'pay' route
                navigate('/Home');
                window.scrollTo(0, 0);

            };
            logIn.addEventListener("click",()=>{
                handleButtonClick()
            })
        }
        window.addEventListener("load",()=>{
            // select items off the links to make it colored when clicked
            let links=document.querySelectorAll(".links li")
            // green background for the selected link     
            links.forEach((link)=>{
                
                link.addEventListener("click",()=>{
                    link.classList.add("clicked");
                    
                    links.forEach((otherLink)=>{
                        if(otherLink!==link){          
                            otherLink.classList.remove("clicked");
                        }
                    });
                });
            })
        })
    }, []); 
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
                    <div  className="login"><img src={props.image} alt=""/> <p>{props.text}</p></div>
                    <div className="drop-login">
                        <form className="login-form">
                            <div className="input-container">
                                <img src={userIcon} alt=""/>
                                <input type="text" placeholder="Email ID" required/>
                            </div>
                            <div className="input-container">
                                <img className="passIcon" src={passIcon} alt=""/>
                                <input type="password" placeholder="Password" required/>
                            </div>
                            <label className="check-container">
                                <p>Remember me</p> 
                                <h4>Forgot password?</h4>

                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>                            
                            <button type="submit">Login</button>
                        </form>
                    </div>
                    <div className="sign-up"><img src={props.signImage} alt=""/> <p>{props.sign}</p></div>
                </div>
            
            </header>
        </div>
    )
}