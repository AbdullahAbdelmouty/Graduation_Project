import payLogo from "../images/3d-hand-with-safe-payment-confirmation-bill 1.png"
import goldIcon from "../images/crown 1.png"
import diamondIcon from "../images/diamond 1.png"
import arrow from "../images/Arrow 1.png"

export default function PayMain(){
    return(
        <div className="pay-main">
            <div className="user-details">
                <input type="text" placeholder="Your name"/>
                <input type="" placeholder="Your country"/>
                <input type="phone" placeholder="Your phone number"/>
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
            <div className="remember">
                <div className="remember-packages">

                    <h3>Remember our packages</h3>
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