import '../style/style.css';
import Header from '../components/header.js';
// import Main from "../components/main.js"
import "../script/script.js"
import Footer from "../components/footer.js"
import logout from "../images/logout (1) 1.png"
import user from "../images/account (2) 2.png"
import PayMain from '../components/paymain.js';
export default function Pay(){
    return(
        <>
            <Header
                text="Log out"
                image={logout}
                sign="User"
                signImage={user}
            />
            <PayMain/>
            <Footer/>
        </>
    )
}