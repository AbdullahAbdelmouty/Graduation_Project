import payLogo from "../images/3d-hand-with-safe-payment-confirmation-bill 1.png"
import goldIcon from "../images/crown 1.png"
import diamondIcon from "../images/diamond 1.png"
// import arrow from "../images/Arrow 1.png"
import React, { useState } from 'react';
export default function PayMain(){
    const countries = [
        { name: 'USA', code: '+1' },
        { name: 'Canada', code: '+1' },
        { name: 'UK', code: '+44' },
        { name: 'Germany', code: '+49' },
        { name: 'France', code: '+33' },
        { name: 'India', code: '+91' },
        { name: 'Australia', code: '+61' },
        { name: 'Egypt', code: '+02' },
      ];
    
      // State to keep track of the selected country and phone number
      const [selectedCountry, setSelectedCountry] = useState('');
    //   const [selectColor, setSelectColor] = useState('rgb(30, 30, 30,30%)');
      const [phoneNumber, setPhoneNumber] = useState('');
      // Event handler for when a country is selected
      const handleCountryChange = (event) => {
        const selectedCountryName = event.target.value;
        setSelectedCountry(selectedCountryName);
    
        // Find the selected country's phone code
        const selectedCountryObject = countries.find(country => country.name === selectedCountryName);
        const countryPhoneCode = selectedCountryObject ? selectedCountryObject.code : '';
    
        // Update the phone number with the country code
        setPhoneNumber(countryPhoneCode);
        // Change the color to black when a country is selected
        
        // setSelectColor('black');     
    };
    
      // Event handler for when the phone number is entered
    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    }
    return(
        <div className="pay-main">
            <div className="details-logo-discount">
                <div className="user-details">
                    <input type="text" placeholder="Your name"/>
                    <div className="custom-dropdown-arrow">
                    <select
                    id="countryDropdown"
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    // style={{ color: selectColor}}
                    >
                    <option value="" disabled selected>Your Country</option>
                    {countries.map((country) => (
                    <option key={country.name} value={country.name}>
                        {country.name}
                    </option>
                    ))}
                </select>

                </div>
                <input
                    type="phone"
                    placeholder="Your phone number"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    
                    />
                    <input type="" placeholder="package"/>
                    <input type="numeric" placeholder="Card Number"/>
                    <input type="password" placeholder="Password"/>
                    <div className="date-CVV" >
                        <input id="CVV" type placeholder="CVV"/>
                        <input id="date" type="" placeholder="MM/YY"/>
                    </div>
                    <input placeholder="promo code (if you have)"/>
                    <input id="submit" type="submit" value="Confirm"/>
                </div> 
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
                        <span className="month">5$ per Month</span>
                        <span>40$ per Year</span>
                        <h4>Extra Limited usage</h4>
                        <h4>No Ads </h4>
                    </div>
                    <div className="diamond">
                        <img src={diamondIcon}  alt=""/>
                        <h3>Diamond</h3>
                        <span className="month">15$ per Month</span>
                        <span>80$ per Year</span>
                        <h4>Un Limited usage</h4>
                        <h4>No Ads </h4>
                    </div>
                </div>
            </div>
        </div>

    )
}