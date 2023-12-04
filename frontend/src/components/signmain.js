import signUpBackground from "../images/6263498 1.png"
import adIcon from "../images/advertising 1.png"
export default function SignMain(){
    return(
        <div className="sign-container">
            <div className="fields-pic">
                <div className="fields">
                    <input type="text" placeholder="Your name"/>
                    <input type="text" placeholder="Your Email"/>
                    <input type="password" placeholder="Password for new acc"/>
                    <input type="password" placeholder="Re-enter password"/>
                    <input className="confirmDetails" type="button" value={"Confirm"}/>
                </div>
                <img src={signUpBackground} alt=""/>
            </div>
            <div className="more-ads">
                <div className="ads">
                    <h3 className="ad-space">ِAd space #2</h3>
                    <img src={adIcon} alt=""/>
                    <h3 className="put-ad">Put your Ad here</h3>
                    <h5>200 x 300 pixels</h5>
                    <h3 className="contact-team">contact our team</h3>
                </div>
                <div className="ads">
                    <h3 className="ad-space">ِAd space #3</h3>
                    <img src={adIcon} alt=""/>
                    <h3 className="put-ad">Put your Ad here</h3>
                    <h5>200 x 300 pixels</h5>
                    <h3 className="contact-team">contact our team</h3>
                </div>

            </div>
        </div>
    )
}