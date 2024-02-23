import Header from "../components/header"
import Footer from "../components/footer"
import SignMain from "../components/signmain"
import login from "../images/log-idn 1.png"
import sign from "../images/user 1.png"
export default function Sign(){
    let txt
    if(localStorage.getItem("access-token")!==null){
        txt="Log out"
        // console.log("not empty")
    }
    else{
        // console.log("not empty")
        txt="Login"
    }
    return(
        <>
        <Header
                text={txt}
                image={login}
                sign="Sign Up"
                signImage={sign}
            />
        <SignMain/>    
        <Footer/>
        </>
    )
}