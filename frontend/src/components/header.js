import home from "../images/home1 1.png"
import about from "../images/about (2) 1.png"
import contact from "../images/suppodrt 1.png"
import mode from "../images/night-modde 1.png"
// import sign from "../images/user 1.png"
// import login from "../images/log-idn 1.png"
import userIcon from "../images/account (2) 2.png"
import passIcon from "../images/losscfk 1.png"
import { useEffect,useState } from "react"
import {useNavigate} from "react-router-dom"
// import { useHistory } from 'react-router-dom';


export default function Header(props){
    
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate();
    useEffect(() => 
    {
        // select elements
        let mode = document.querySelector(".mode")
        let header=document.querySelector("header")
        let body=document.querySelector("body")
        let p1=document.querySelector(".home-content p.first")
        let p2=document.querySelector(".home-content p.second")
        let upload=document.querySelector(".home-content form")
        let labelText=document.querySelector(".home-content form label")
        // let labelImage=document.querySelector(".home-content form img")
        let ads=document.querySelector(".ads")
        let adsText=document.querySelector(".ads h5")
        let adsText1=document.querySelector(".premium .ads .ad-space")
        let premiumText=document.querySelector(".premium-content h2")
        let packages=document.querySelectorAll(".premium-content .packages div")
        let packagesBtns=document.querySelectorAll(".premium-content .packages div button")
        let packagesText3=document.querySelectorAll(".premium-content h3")
        let packagesText4=document.querySelectorAll(".premium-content h4")
        let packagesOR=document.querySelectorAll(".premium-content .month")
        let btnsArrow=document.querySelectorAll(".premium-content button img")
        let whyText2=document.querySelector(".why-content h2")
        let whyText3=document.querySelectorAll(".why-content h3")
        let whyText4=document.querySelectorAll(".why-content h4")
        let whyPara=document.querySelector(".why-content p")
        let aboutText=document.querySelector(".about-content h2")
        let weContainer=document.querySelector(".about-content .we-text")
        let contactContainer=document.querySelector(".contact-container")
        let contactInputs=document.querySelectorAll(".contact-container input")
        let contactNumber=document.querySelector(".contact-container .contact-number h4")
        let contactNumberSpan=document.querySelector(".contact-container .contact-number h4 span")
        let contactInputsPlace=document.querySelectorAll(".contact-container input::placeholder")
        let contactBtn=document.querySelector(".contact-container .contact-number button")
        let footer=document.querySelector("footer")
        let footerLists=document.querySelectorAll(".footer-container ul li")
        let copyText=document.querySelector(".copy-right h5")
        
        // sign page elements
        let inputSign=document.querySelectorAll(".fields input")
        let signAds=document.querySelectorAll(".more-ads .ads")
        let signAdsText=document.querySelectorAll(".more-ads .ads h5")
        let signAdsText1=document.querySelectorAll(".more-ads .ads h1")
        let signPic=document.querySelector(".fields-pic .sign-pic")
        
        // pay page elements
        let rememberTitle=document.querySelector(".remember h3")
        let payBackages=document.querySelectorAll(".remember-packages  div")
        let payText=document.querySelectorAll(".remember-packages  div h3")
        let payText4=document.querySelectorAll(".remember-packages  div h4")
        let payMonth=document.querySelectorAll(".remember-packages .month")
        let payInput=document.querySelectorAll(".pay-main input")
        let paySelect=document.querySelectorAll(".pay-main select")
        let selectArrow=document.querySelectorAll(".custom-dropdown-arrow")
        let payOption=document.querySelectorAll(".pay-main select option")
        let applyBtn=document.querySelector(".logo-discount .discount .apply")
        let payPara=document.querySelector(".logo-discount .discount p")

        // make the header transparent
        // let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
        window.onscroll = function () {
            header.style.opacity="0.8"
        }
            
        
        // dark mode
        function darkModeHeadAndFoot(){

            header.classList.toggle("dark")
            body.classList.toggle("dark")
            footer.classList.toggle("dark")
            copyText.classList.toggle("dark")
            footerLists.forEach((li)=>{
            
                li.classList.toggle("dark")
            })
            packagesText4.forEach((pack)=>{
                
                pack.classList.toggle("dark")
            })
            packages.forEach((pack)=>{
                
                pack.classList.toggle("dark")
            })
            packagesBtns.forEach((pack)=>{
                
                pack.classList.toggle("dark")
            })
            btnsArrow.forEach((btn)=>{
                
                btn.classList.toggle("dark")
            })
            packagesText3.forEach((pack)=>{
                
                pack.classList.toggle("dark")
            })
            packagesOR.forEach((pack)=>{
                pack.classList.toggle("dark")
            })
        }
        mode.addEventListener("click",()=>{
            if(window.location.pathname==="/"||window.location.pathname==="/Home"||window.location.pathname==="/Sign"||window.location.pathname==="/pay"){
                // window.localStorage.setItem("darkMode",(darkModeHeadAndFoot()))
                darkModeHeadAndFoot()
            }
            if(window.location.pathname==="/"||window.location.pathname==="/Home"){
                
                // darkModeHeadAndFoot()
                p1.classList.toggle("dark")
                premiumText.classList.toggle("dark")
                p2.classList.toggle("dark")
                upload.classList.toggle("dark")
                labelText.classList.toggle("dark")
                // labelImage.classList.toggle("dark")
                ads.classList.toggle("dark")
                adsText.classList.toggle("dark")
                adsText1.classList.toggle("dark")
                whyText2.classList.toggle("dark")
                whyPara.classList.toggle("dark")
                aboutText.classList.toggle("dark")
                weContainer.classList.toggle("dark")
                contactContainer.classList.toggle("dark")
                contactNumber.classList.toggle("dark")
                contactNumberSpan.classList.toggle("dark")
                contactBtn.classList.toggle("dark")
                whyText3.forEach((text3)=>{
                    
                    text3.classList.toggle("dark")
                })
                whyText4.forEach((text)=>{
                    
                    text.classList.toggle("dark")
                })
                contactInputs.forEach((inp)=>{
                        
                    inp.classList.toggle("dark")
                })
                contactInputsPlace.forEach((place)=>{
                        
                    place.classList.toggle("dark")
                })
                }
            if(window.location.pathname==="/Sign"){
                signAds.forEach((ad)=>{
                    ad.classList.toggle("dark")
                })
                signAdsText.forEach((text)=>{
                    text.classList.toggle("dark")
                })
                signAdsText1.forEach((text)=>{
                    text.classList.toggle("dark")
                })
                inputSign.forEach((inp)=>{
                    inp.classList.toggle("dark")
                    
                })
                signPic.classList.toggle("dark")
            }
            if(window.location.pathname==="/pay"){
                rememberTitle.classList.toggle("dark")
                payBackages.forEach((back)=>{
                    back.classList.toggle("dark")
                })
                payText.forEach((text)=>{
                    text.classList.toggle("dark")
                })
                payText4.forEach((text)=>{
                    text.classList.toggle("dark")
                })
                payMonth.forEach((month)=>{
                    month.classList.toggle("dark")

                })
                payInput.forEach((inp)=>{
                    inp.classList.toggle("dark")
                })
                applyBtn.classList.toggle("dark")
                payPara.classList.toggle("dark")
                // .classList.toggle("dark")
                paySelect.forEach((opt)=>{
                    opt.classList.toggle("dark")
                })
                payOption.forEach((opt)=>{
                    opt.classList.toggle("dark")
                })
                selectArrow.forEach((arrow)=>{
                    arrow.classList.toggle("dark")
                })
            }
            })
            // handle the appearance of the dropLogin
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
            
            if(props.text==="Login"){
                
                if (logIn) {
                    logIn.addEventListener("click", (event) => {
                        event.stopPropagation(); // Prevent the click event from propagating to the document
                        showDrop();
                    });
                }
                
                document.addEventListener("dblclick", () => {
                    hideDrop();
                });
            }
            // make the logout head to the home page
            if(props.text==="Log out"){
                
                const handleButtonClick = () => {
                    localStorage.clear()
                    // Navigate to the 'pay' route
                    navigate('/');
                    window.scrollTo(0, 0);
                    
                };
                logIn.addEventListener("click",()=>{
                    handleButtonClick()
                })
            }
            // head to signup page
            let SignUp=document.querySelector(".sign-up")
            const goToSign = () => {
                // Navigate to the 'Sign' route
                navigate('/Sign');
                window.scrollTo(0, 0);            
                };
                
                
                        
            SignUp.addEventListener("click",()=>{
                goToSign()
            })
            //head to home page by the home word on the header 
        let homeDiv=document.querySelector(".get-back-to-home")    
        const goBackHome = () => {
            
            // Navigate to the 'pay' route
            navigate('/Home');
            window.scrollTo(0, 0);
            highLightHome()
            
        };
        homeDiv.addEventListener("click",()=>{
            goBackHome()
        })
        // highlight the links if u get back to the home page
        if(window.location.pathname==="/"||window.location.pathname==="/Home"){
            highLightLinks()   
        }
        // function to highlight the links in the header
        function highLightHome(){
            
            if(window.location.pathname==="/"||window.location.pathname==="/Home"){
                
                homeDiv.classList.add("clicked");
            }
        }
        

        // green background for the selected link     
        function highLightLinks(){

            let links=document.querySelectorAll(".links li")
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
        }

        window.addEventListener("load",()=>{
            // select items off the links to make it colored when clicked
            highLightHome()
        })
    }, []); 


    async function login(e){
        e.preventDefault()
        let item={username,password};
        let result=await fetch("http://127.0.0.1:8000/api/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item) 
        });
        result=await result.json()
        console.log(result)
        console.warn(username,password)
    if(result.access){
        // get token
        const jwtToken = result.access;
        // decode token
        const decodedToken = JSON.parse(atob(jwtToken.split('.')[1]));
        console.log(decodedToken)
        // console.log(result)
        localStorage.setItem("user",JSON.stringify(result))
        localStorage.setItem("access-token",JSON.stringify(result.access))
        localStorage.setItem("user-username",decodedToken.username)
        let dropLogIn = document.querySelector(".form .drop-login");
        navigate("/")
        function hideDrop() {
            if (dropLogIn) {
                dropLogIn.style.display = "none";
            }
        }
        hideDrop()   
    }
    else{
        alert("Please enter correct data");
    }
    // localStorage.setItem("refresh-token",JSON.stringify(result.refresh))
}



    return(
        
        <div>
            <header>
                <ul className="links">
                    <li  className="get-back-to-home" ><img src={home} alt=""/> <a href="#home">Home</a></li>
                    <li><i className="fa-sharp fa-solid fa-crown"></i> <a href="#premium">Premium</a></li>
                    <li><img src={about} alt=""/> <a href="#about">About us</a></li>
                    <li><img src={contact} alt=""/> <a href="#contact">Contact us</a></li>
                </ul>
                <div className="form">
                    <img className="mode" src={mode} alt=""/>
                    <div  className="login"><img src={props.image}  alt=""/> <p>{props.text}</p></div>
                    <div className="drop-login">
                        <form className="login-form">
                            <div className="input-container">
                                <img src={userIcon} alt=""/>
                                <input id="email" type="text" placeholder="username" required value={username}
                                onChange={(e)=>setUserName(e.target.value)}/>
                            </div>
                            <div className="input-container">
                                <img className="passIcon" src={passIcon} alt=""/>
                                <input id="pass" type="password" placeholder="Password" required value={password}
                                onChange={(e)=>setPassword(e.target.value)}/>
                            </div>
                            <label className="check-container">
                                <p>Remember me</p> 
                                <h4>Forgot password?</h4>

                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>                            
                            <button onClick={login} type="submit">Login</button>
                        </form>
                    </div>
                    <div className="sign-up"><img src={props.signImage} alt=""/> <p>{props.sign}</p></div>
                </div>
            
            </header>
        </div>
    )
}