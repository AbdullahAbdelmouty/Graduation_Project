import Header from "../components/header"
import Footer from "../components/footer"
import SignMain from "../components/signmain"
import login from "../images/log-idn 1.png"
import sign from "../images/user 1.png"
export default function Sign(){
    return(
        <>
        <Header
                text="Log in"
                image={login}
                sign="Sign in"
                signImage={sign}
            />
        <SignMain/>    
        <Footer/>
        </>
    )
}