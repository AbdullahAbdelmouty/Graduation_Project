import payLogo from "../images/3d-hand-with-safe-payment-confirmation-bill 1.png"
import goldIcon from "../images/crown 1.png"
import diamondIcon from "../images/diamond 1.png"
// import arrow from "../images/Arrow 1.png"
import React, { useState } from 'react';
export default function PayMain(){
    const [country,setCountry] = useState("")
        // { name: 'usa', code: '+1-' },
        // { name: 'canada', code: '+1-' },
        // { name: 'uk', code: '+44-' },
        // { name: 'germany', code: '+49-' },
        // { name: 'france', code: '+33-' },
        // { name: 'india', code: '+91-' },
        // { name: 'australia', code: '+61-' },
        // { name: 'egypt', code: '+02-' },
    
    
      // State to keep track of the selected country and phone number
    const [selectedCountry, setSelectedCountry] = useState('');
    //   const [selectColor, setSelectColor] = useState('rgb(30, 30, 30,30%)');
    const [phoneNumber, setPhoneNumber] = useState('');
      // Event handler for when a country is selected
    // const handleCountryChange = (event) => {
    //     const selectedCountryName = event.target.value;
    //     setSelectedCountry(selectedCountryName);
    
    //     // Find the selected country's phone code
    //     const selectedCountryObject = country.find(country => country.name === selectedCountryName);
    //     const countryPhoneCode = selectedCountryObject ? selectedCountryObject.code : '';
    
    //     // Update the phone number with the country code
    //     setPhoneNumber(countryPhoneCode);
    //     // Change the color to black when a country is selected
        
    //     // setSelectColor('black');     
    // };
    
    // Event handler for when the phone number is entered
    // const handlePhoneNumberChange = (event) => {
    //     setPhoneNumber(event.target.value);
    // }
    const [period, setSelectedDuration] = useState('');

    const handleDurationChange = (event) => {
        setSelectedDuration(event.target.value);
    };
    const [package_id, setSelectedType] = useState('');

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
    };
    const [card_id,setCardID]=useState("");
    const [fullName,setFullName]=useState("");
    const [email,setEmail]=useState("");
    const [formError, setFormError] = useState("");
    // const [card_id,setCardID]=useState("");
    const accessToken = localStorage.getItem("access-token");
    const sanitizedAccessToken = accessToken ? accessToken.replace(/["']/g, '') : '';
    const collectData= async(e)=>{
        e.preventDefault()
        // console.log(card_id)
        if (!fullName || !email) {
            setFormError("Please fill out this field.");
            return;
        }
        // console.log(JSON.stringify({ card_id }))
        console.log(card_id,fullName,phoneNumber,country,period,email,package_id)
        let result=await fetch("http://127.0.0.1:8000/api/add_order",{
            method:"POST",
            body:JSON.stringify({card_id,fullName,phoneNumber,country,period,email,package_id}),
            headers:{ 
                "Authorization": `Bearer ${sanitizedAccessToken}`,
                "content-Type":"application/json",
            }
            
        })
        result=await result.json()
        console.log(result)
    }

    return(
        <div className="pay-main">
            <div className="details-logo-discount">
                <form  className="user-details">
                    {formError && <p style={{ color: "red" }}>{formError}</p>}
                    <input type="text" placeholder="Your name" 
                    onChange={(e)=>setFullName(e.target.value)}
                    required 
                    />
                    {formError && <p style={{ color: "red" }}>{formError}</p>}
                    <input type="text" placeholder="Your email" 
                    onChange={(e)=>setEmail(e.target.value)}
                    required 
                    />
                    <div className="custom-dropdown-arrow">
                        <select
                        id="countryDropdown"
                        value={country}
                        onChange={(e)=>setCountry(e.target.value)}
                        // style={{ color: selectColor}}
                        >
                        <option value="" disabled selected>Your Country</option>
                        <option value="usa" >usa</option>
                        <option value="canada">canada</option>
                        <option value="uk">uk</option>
                        <option value="germany">germany</option>
                        <option value="egypt">egypt</option>
                        </select>

                    </div>
                    <input type="number" placeholder="Your phone number" value={phoneNumber}
                    onChange={(e)=>setPhoneNumber(e.target.value)}
                    
                    />
                    <div className="custom-dropdown-arrow">
                    <select id="packageDuration"  value={period} onChange={handleDurationChange}>
                        <option value="" selected disabled> Packet duration</option>
                        <option value="monthly">monthly</option>
                        <option value="yearly">yearly</option>
                    </select>
                    </div>
                    <div className="custom-dropdown-arrow">
                    <select id="packageType"  value={package_id} onChange={handleTypeChange}>
                        <option value="" selected disabled>Packet type</option>
                        <option value="gold">gold</option>
                        <option value="diamond">diamond</option>
                    </select>
                    </div>
                    <input type="numeric" placeholder="Card Number"
                    onChange={(e)=>setCardID(e.target.value)}
                    />
                    <input type="text" placeholder="Name on card"/>
                    <div className="date-CVV" >
                        <input id="CVV" type placeholder="CVV"/>
                        <input id="date" type="" placeholder="MM/YY"/>
                    </div>
                    <input placeholder="promo code (if you have)"/>
                    <input onClick={collectData} id="submit" type="submit" value={"Confirm"}/>
                </form> 
                <div className="logo-discount">
                    <img src={payLogo} alt="none"/>
                    <div className="discount">
                        <button className="apply">Apply</button>
                        <input id="show-discount"  type="submit" value="Discount 0%"/>
                        <p>The New price is ...</p>
                    </div>
                </div>
            </div>
            <div className="remember">
                <h3>Remember our packages</h3>
                <div className="remember-packages">
                    <div className="gold">
                        <img src={goldIcon}  alt=""/>
                        <h3>Gold</h3>
                        <span className="month">10$ per Month</span>
                        <span>100$ per Year</span>
                        <h4>usage per month: 10</h4>
                        <h4>usage per year: 120</h4>
                        <h4>No Ads </h4>
                    </div>
                    <div className="diamond">
                        <img src={diamondIcon}  alt=""/>
                        <h3>Diamond</h3>
                        <span className="month">20$ per Month</span>
                        <span>200$ per Year</span>
                        <h4>usage per month: 20</h4>
                        <h4>usage per year: 240</h4>
                        <h4>No Ads </h4>
                    </div>
                </div>
            </div>
        </div>

    )
}