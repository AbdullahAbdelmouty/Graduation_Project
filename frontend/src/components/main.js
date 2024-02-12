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
import { useState } from "react"
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
            
            function FetchPack(url){
                useEffect(()=>{
                    // diamond element selection
                    let frontNameDiamond=document.querySelector(".premium-content .packages .diamond h3")
                    let priMonthDiamond=document.querySelector(".premium-content .packages .diamond .month")
                    let priYearDiamond=document.querySelector(".premium-content .packages .diamond .year")
                    let numUsageDiamondMonth=document.querySelector(".premium-content .packages .diamond .usage-month")
                    let numUsageDiamondYear=document.querySelector(".premium-content .packages .diamond .usage-year")
                    let featureOneDiamond=document.querySelector(".premium-content .packages .diamond .featuresOne")
                    let featureTwoDiamond=document.querySelector(".premium-content .packages .diamond .featuresTwo")
                    // gold element selection
                    let frontNameGold=document.querySelector(".premium-content .packages .gold h3")
                    let priMonthGold=document.querySelector(".premium-content .packages .gold .month")
                    let priYearGold=document.querySelector(".premium-content .packages .gold .year")
                    let numUsageGoldMonth=document.querySelector(".premium-content .packages .gold .usage-month")
                    let numUsageGoldYear=document.querySelector(".premium-content .packages .gold .usage-year")
                    let featureOneGold=document.querySelector(".premium-content .packages .gold .featuresOne")
                    let featureTwoGold=document.querySelector(".premium-content .packages .gold .featuresTwo")
                    // free element selection
                    let frontNameFree=document.querySelector(".premium-content .packages .free h3")
                    let priMonthFree=document.querySelector(".premium-content .packages .free .month")
                    let priYearFree=document.querySelector(".premium-content .packages .free .year")
                    let numUsageFreeMonth=document.querySelector(".premium-content .packages .free .usage-month")
                    let numUsageFreeYear=document.querySelector(".premium-content .packages .free .usage-year")
                    let featureOneFree=document.querySelector(".premium-content .packages .free .featuresOne")
                    let featureTwoFree=document.querySelector(".premium-content .packages .free .featuresTwo")
                    
                    fetch(url,{method:"GET"}).then((res)=>{
                        return res.json()
                    }).then((res)=>{
                        console.log(res)
                        console.log(res[0].frontName)
                        
                        // diamond package appending
                        frontNameDiamond.innerHTML=(res[0].frontName)
                        priMonthDiamond.innerHTML=(`${res[0].pricePmonth}$ per Month`)
                        priYearDiamond.innerHTML=(`${res[0].pricePyear}$ per Year`)
                        numUsageDiamondMonth.innerHTML=(`usage per month: ${res[0].numberOfuploadsPerMonth}`)
                        numUsageDiamondYear.innerHTML=(`usage per year: ${res[0].numberOfuploadsPerYear}`)
                        featureOneDiamond.innerHTML=(`feature one: ${res[0].features.split(",")[0]}`)
                        featureTwoDiamond.innerHTML=(`feature two: ${res[0].features.split(",")[1]}`)
                            
                        // free package appending
                        frontNameFree.innerHTML=(res[1].frontName)
                        priMonthFree.innerHTML=(`${res[1].pricePmonth}$ per Month`)
                        priYearFree.innerHTML=(`${res[1].pricePyear}$ per Year`)
                        numUsageFreeMonth.innerHTML=(`usage per month: ${res[1].numberOfuploadsPerMonth}`)
                        numUsageFreeYear.innerHTML=(`usage per year: ${res[1].numberOfuploadsPerYear}`)
                        featureOneFree.innerHTML=(`feature one: ${res[1].features.split(",")[0]}`)
                        featureTwoFree.innerHTML=(`feature two: ${res[1].features.split(",")[1]}`)
                        
                        // Gold package appending
                        frontNameGold.innerHTML=(res[2].frontName)
                        priMonthGold.innerHTML=(`${res[2].pricePmonth}$ per Month`)
                        priYearGold.innerHTML=(`${res[2].pricePyear}$ per Year`)
                        numUsageGoldMonth.innerHTML=(`usage per month: ${res[2].numberOfuploadsPerMonth}`)
                        numUsageGoldYear.innerHTML=(`usage per year: ${res[2].numberOfuploadsPerYear}`)
                        featureOneGold.innerHTML=(`feature one: ${res[2].features.split(",")[0]}`)
                        featureTwoGold.innerHTML=(`feature two: ${res[2].features.split(",")[1]}`)
                        
                    }).catch((error) => {
                        // Handle errors
                        console.error('Error fetching data:', error);
                    });
                })
                return 
            }
            
            FetchPack(allPackUrl)
            // Fetch(signUpUrl)
            // Fetch(signInUrl)
            // Fetch(getCustomerUrl)
            // Fetch(addCustomerUrl)
            // Fetch(addCardUrl)
            // Fetch(getAllCardUrl)
            // Fetch(addUploadUrl)
            // Fetch(getOrderForCustomerUrl)
            // Fetch(updateOrderUrl)
            // Fetch(getUploadsForSpecificCustomerUrl)
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
                {/* <h1>{isBegin}</h1> */}
                <form>
                    <label htmlFor="file">Upload/drag and drop your PDF </label>
                    <input className="input-pdf" type="file" name="file" id="file" onChange={(event) => uploadFile(event)} />                </form>

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
                        <h3></h3>
                        <span className="month"></span>
                        <span className="year"></span>
                        <h4 className="usage-month"></h4>
                        <h4 className="usage-year"></h4>
                        <h4>Ads </h4>
                        <h4 className="featuresOne"></h4>
                        <h4 className="featuresTwo"></h4>
                     
                        <button onClick={freeBtnScroll} className="freeBtn"><div>Try </div> <img src={arrow} alt=""/></button>
                    </div>
                    <div className="gold">
                        <img src={goldIcon}  alt=""/>
                        <h3></h3>
                        <span className="month"></span>
                        <span className="year"></span>
                        <h4 className="usage-month"></h4>
                        <h4 className="usage-year"></h4>
                        <h4>No Ads </h4>
                        <h4 className="featuresOne"></h4>
                        <h4 className="featuresTwo"></h4>
                     
                        <button onClick={handleButtonClick}  className="goldBtn"><div>Buy </div> <img src={arrow} alt=""/></button>
                    </div>
                    <div className="diamond">
                        <img src={diamondIcon}  alt=""/>
                        <h3></h3>
                        <span className="month"></span>
                        <span className="year"></span>
                        <h4 className="usage-month"></h4>
                        <h4 className="usage-year"></h4>
                        <h4>No Ads </h4>
                        <h4 className="featuresOne"></h4>
                        <h4 className="featuresTwo"></h4>
                     
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