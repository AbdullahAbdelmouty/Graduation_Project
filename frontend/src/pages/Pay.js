import '../style/style.css';
import Header from '../components/header.js';
// import Main from "../components/main.js"
import "../script/script.js"
import Footer from "../components/footer.js"
import logout from "../images/logout (1) 1.png"
import user from "../images/account (2) 2.png"
import PayMain from '../components/paymain.js';
export default function Pay(){
    let username=localStorage.getItem("user-username")
    let txt
    if(localStorage.getItem("access-token")!==null){
        txt="Log out"
        // console.log("noooot empty")
    }
    else{
        txt="Login"
        // console.log("noooot empty")
    }
    return(
        <>
            <Header
                text={txt}
                image={logout}
                sign={username}
                signImage={user}
            />
            <PayMain/>
            <Footer/>
        </>
    )
}