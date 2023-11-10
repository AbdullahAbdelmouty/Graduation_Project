import secondLogo from "../images/Untitled-10@3x@3x 2.png"
import thirdLogo from "../images/Untitled-10@3x@3x 3.png"

export default function Footer(){
    return(
        <footer>
            <div className="footer-container">
                <img className="second-logo" src={secondLogo} alt=""/>
                <ul className="pages">
                    <li>Pages</li>
                    <li>Home</li>
                    <li>Premium</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
                <ul className="virus">
                    <li>VirusTotal</li>
                    <li>Get Support</li>
                    <li>How it work</li>
                    <li>Common Q</li>
                </ul>
                <ul className="virus">
                    <li>Premium Services</li>
                    <li>Gold</li>
                    <li>Diamond</li>
                </ul>
            </div>
                <div className="copy-right"><img className="thirdLogo" src={thirdLogo} alt=""/> <h5>Copyright © 2023-2024 Malero , All rights reserved.</h5></div>
        </footer>
    )
}