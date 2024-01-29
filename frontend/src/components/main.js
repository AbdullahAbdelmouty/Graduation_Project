import malero from "../images/Untitled-10@3x@3x 1.png"
import upload from "../images/upload 1.png"
import freeIcon from "../images/free 1.png"
import goldIcon from "../images/crown 1.png"
import diamondIcon from "../images/diamond 1.png"
import arrow from "../images/Arrow 1.png"
import adIcon from "../images/advertising 1.png"
import accuracyIcon from "../images/aim 1.png"
import securityIcon from "../images/shield 1.png"
import economicIcon from "../images/salary 1.png"
import mohamed from "../images/file (1).png"
// import PayMain from "./paymain"
import {useNavigate} from "react-router-dom"
// import Pay from "../pages/Pay"
import { useEffect } from "react"
export default function Main(props){
        
            const url = "http://127.0.0.1:8000/api/upload_pdf"
            const uploadFile = async (event) => {
                event.preventDefault();
                const formData = new FormData();
                formData.append('pdf', event.target.files[0]);
                const response = await fetch(url, {
                    method: 'POST',
                    body: formData
                });
                const data = await response.json();
                console.log(data);
                    let result=document.querySelector(".home-content .result")
                
                    if(parseFloat(data.result)>0.5){
                        result.innerHTML="Malicious"
                    }
                    else{
                        result.innerHTML="Benign"
                    }
                    
            };
            // const signUpUrl = "http://127.0.0.1:8000/api/sign_up"
            // const signUpFetch = async (event) => {
            //     // event.preventDefault();
            //     // const formData = new FormData();
            //     // formData.append('sign', event.target.files[0]);
            //     const response = await fetch(signUpUrl, {
            //         method: 'POST',
            //         // body: formData
            //     });
            //     const data = await response.json();
            //     console.log(data);
            // }
            // signUpFetch()
            let allPackUrl="http://127.0.0.1:8000/api/get_all_packages"
            let signUpUrl="http://127.0.0.1:8000/api/sign_up"
            let signInUrl="http://127.0.0.1:8000/api/sign_in"
            let getCustomerUrl="http://127.0.0.1:8000/api/get_customer"
            let addCustomerUrl="http://127.0.0.1:8000/api/add_package"
            let addCardUrl="http://127.0.0.1:8000/api/add_card"
            let getAllCardUrl="http://127.0.0.1:8000/api/get_all_cards"
            let addUploadUrl="http://127.0.0.1:8000/api/add_upload"
            let getOrderForCustomerUrl="http://127.0.0.1:8000/api/get_order_for_customer"
            let updateOrderUrl="http://127.0.0.1:8000/api/update_order"
            let getUploadsForSpecificCustomerUrl="http://127.0.0.1:8000/api/get_all_uploads_for_specific_customer"
            function Fetch(url){
                fetch(url,{method:"GET"}).then((res)=>{
                return res.json()
                }).then((res)=>{
                    console.log(res)
                }).catch((error) => {
                    // Handle errors
                    console.error('Error fetching data:', error);
                });
            }

            // Fetch(allPackUrl)
            // Fetch(signUpUrl)
            // Fetch(signInUrl)
            // Fetch(getCustomerUrl)
            // Fetch(addCustomerUrl)
            // Fetch(addCardUrl)
            // Fetch(getAllCardUrl)
            // Fetch(addUploadUrl)
            // Fetch(getOrderForCustomerUrl)
            // Fetch(updateOrderUrl)
            Fetch(getUploadsForSpecificCustomerUrl)

// head to pay when click the buy button
const navigate = useNavigate();

const handleButtonClick = () => {
    // Navigate to the 'pay' route
    navigate('/pay');
    window.scrollTo(0, 0);
};
// function to scroll to upload when click the free btn
function freeBtnScroll(){
    window.scrollTo(0,0)
}
return(
        <main>
        <div id="home" className="home">
            <div  className="home-content">
                
                <p className="result"></p>
                <img className="logo" src={props.logo} alt=""/>
                <p className="first">
                    Harnessing Deep Learning for Evasive PDF Malware Detection, 
                    Pioneering a New Frontier with Efficient Net and Image Transformation.
                </p>
                <form>
                    <label htmlFor="file">Upload/drag and drop your PDF </label>
                    <input className="input-pdf" type="file" name="file" id="file" onChange={(event) => uploadFile(event)} />
                    {/* <img src={upload} alt="" onClick={() => document.getElementById('file').click()}/> */}
                </form>

                <p className="second">
                    By submitting data above, you are agreeing to our Terms of Service and Privacy Policy,
                    and to the sharing of your Sample submission with the security community. 
                    Please do not submit any personal information;
                    VirusTotal is not responsible for the contents of your submission.
                </p>
            </div>
        </div>
        
        <hr  className="home-end"/>
        
        <div className="premium">
            <div className="premium-content">
            <div className="ads">
                    <h1 className="ad-space">ِAd space #1</h1>
                    <img src={adIcon} alt=""/>
                    <h3 className="put-ad">Put your Ad here</h3>
                    <h5>200 x 300 pixels</h5>
                    <h3 className="contact-team">contact our team</h3>
                </div>

                <h2 id="premium">Try Premium Malero</h2>
                <div className="packages">
                    <div className="free">
                        <img src={freeIcon}  alt=""/>
                        <h3>Free</h3>
                        <span>Free</span>
                        <span></span>
                        <h4>Limited usage</h4>
                        <h4>Ads </h4>
                        <button onClick={freeBtnScroll} className="freeBtn"><div>Try </div> <img src={arrow} alt=""/></button>
                    </div>
                    <div className="gold">
                        <img src={goldIcon}  alt=""/>
                        <h3>Gold</h3>
                        <span className="month">5$ per Month</span>
                        <span>40$ per Year</span>
                        <h4>Extra Limited usage</h4>
                        <h4>No Ads </h4>
                        <button onClick={handleButtonClick}  className="goldBtn"><div>Buy </div> <img src={arrow} alt=""/></button>
                    </div>
                    <div className="diamond">
                        <img src={diamondIcon}  alt=""/>
                        <h3>Diamond</h3>
                        <span className="month">15$ per Month</span>
                        <span>80$ per Year</span>
                        <h4>Un Limited usage</h4>
                        <h4>No Ads </h4>
                        <button onClick={handleButtonClick} className="diamondBtn"><div>Buy </div> <img src={arrow} alt=""/></button>
                    </div>
                </div>
            </div>
        </div>
        
        <hr className="premium-end"/>
        
        <div className="why">
                <div className="why-content">
                    <h2>Why Malero ?</h2>
                    <div className="advantages">
                        <div className="accuracy">
                            <img src={accuracyIcon} alt=""/>
                            <h3>Accuracy</h3>
                            <h4>Our Accuracy above 90%</h4>
                        </div>
                        <div className="security">
                            <img src={securityIcon} alt=""/>
                            <h3>Security</h3>
                            <h4>Data Encryption :Secure File Uploads</h4>
                        </div>
                        <div className="economic">
                            <img src={economicIcon} alt=""/>
                            <h3>Economic</h3>
                            <h4>Our premium account high value and low price</h4>
                        </div>
                    </div>
                        <p>Malero is a real evasive PDF malware detector</p>
                </div>
        </div>
        
            <hr id="about" className="why-end"/>
        
        <div  className="about">
                <div className="about-content">
                    <h2>who are we ?</h2>
                    <div className="we">
                        <div><span></span><p>Eng Shady Esmael</p></div>
                        <div><span></span><p>Eng Mostafa Mamdoh</p></div>
                        <div><span></span><p>Eng Osama Khedr</p></div>
                        <div><span></span><p>Eng Abdullah abdelmouty</p></div>
                        <div><span><img src={mohamed}/></span><p>Eng Mohamed ahmed</p></div>
                    </div>
                    <div className="we-text">
                        <p>
                        We are a group of 5 engineers from Helwan Engineering, 
                        2 of us from the Communications and Electronics Department and 3 from the Computers Department. 
                        We met for one goal, which is to secure any user who fears the presence of a virus hidden in a PDF file. 
                        The core of the idea is based on artificial intelligence, specifically deep learning. 
                        Those responsible for the artificial intelligence part are Engineer Mustafa Mamdouh and Engineer Osama Khadr, 
                        while engineer Shady esmael is the team leader and responsible for designing the site (user interface and user experiences), and finally,
                        engineer Abdullah Abdel Mouty and engineer Mohamed Ahmed Mohamed are the site’s executors (front end & back end)
                        </p>
                    </div>
                </div>
        </div>
        
            <hr id="contact" className="about-end"/>
        
        <div className="contact">
            <div className="contact-container">
                <p>Have question ? Contact us.</p>
                <input type="text" placeholder="Your name"></input>
                <input type="email" placeholder="Your E-mail"></input>
                <input type="numeric" placeholder="Phone number"></input>
                <input className="message" type="text" placeholder="Your message"></input>
                <div className="contact-number">
                    <button className="contact-button">Send  </button>
                    <h4>Or call <span>1234</span></h4>
                </div>

            </div>
        </div>
        
    </main>
    )
}