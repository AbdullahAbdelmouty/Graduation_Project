import signUpBackground from "../images/6263498 1.png"
import adIcon from "../images/advertising 1.png"
import React,{useEffect, useState} from "react"
import { useNavigate } from "react-router-dom";
export default function SignMain(){
    const[username,setUserName]=useState("");
    const[first_name,setFirstName]=useState("");
    const[last_name,setLastName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[password2,setRePassword]=useState("");
    const[error,setError]=useState(false);
    const navigate =useNavigate();
    let signUp=document.querySelector(" header .form .sign-up ")
    useEffect(()=>{
        const auth=localStorage.getItem("user")
        if(auth){
            navigate("/")
        }

    },[])
    // const accessToken = localStorage.getItem("access-token");
    // const sanitizedAccessToken = accessToken ? accessToken.replace(/["']/g, '') : '';
    const collectData=async(e)=>{
        e.preventDefault()
        console.warn(username,first_name,last_name,email,password,password2)
        // if(!username || !first_name || !last_name || !email || !password || !password2 ){
        //     setError(true)
        //     return false
        // }
        let result=await fetch("http://127.0.0.1:8000/api/register",{
            method:"POST",
            body:JSON.stringify({username,first_name,last_name,email,password,password2}),
            headers:{
                "content-Type":"application/json",
                // "Authorization": `Bearer ${sanitizedAccessToken}`
            }
        })
        if(result.status===400){
            result=await result.json();
            setError(true)
            // console.log("noo")
            if (result.username) {
                let spanUser=document.querySelector(".userErr")
                if(spanUser){
                    
                    spanUser.innerHTML = result.username[0];
                }
            }   
            if (result.email) {
                let spanEmail=document.querySelector(".errEmail")
                if(spanEmail){

                    spanEmail.innerHTML = result.email[0];
                }
            }   
            if (result.password) {
                let spanPass=document.querySelector(".passError")
                if(spanPass){
                    console.log("password-error")
                    spanPass.innerHTML = result.password[0];
                }
            }   
            if (result.password2) {
                let spanPasstwo=document.querySelector(".passTwoError")
                if(spanPasstwo){
                    console.log("password-error")
                    spanPasstwo.innerHTML = result.password[0];
                }
            }   
            console.log(result.email)
            console.log(result.username)
            console.log(result.password)
    
        }
        else{
            result=await result.json();

            console.log(result)
            localStorage.setItem("user",JSON.stringify(result))
            localStorage.setItem("user-username",JSON.stringify(result.username))
            navigate('/')
        }

    }
    
    return(
        <div className="sign-container">
            <div className="fields-pic">
                <form  onSubmit={collectData} className="fields">
                    <input type="text" placeholder="username" name="username" value={username}
                    onChange={(e)=>setUserName(e.target.value)}/>
                    {<span className="userErr"></span>}
                    
                    <input type="text" placeholder="first name" name="firstname" value={first_name}
                    onChange={(e)=>setFirstName(e.target.value)}/>
                    { <span></span>}

                    <input type="text" placeholder="last name" name="lastname" value={last_name}
                    onChange={(e)=>setLastName(e.target.value)}/>
                    { <span></span>}
                    
                    <input type="email" placeholder="Your Email" name="email" value={email}
                    onChange={(e)=>setEmail(e.target.value)}/>
                    { <span className="errEmail"></span>}
                    
                    <input type="password" placeholder="Password for new acc" name="password" value={password}
                    onChange={(e)=>setPassword(e.target.value)}/>
                    { <span className="passError"></span>}
                    
                    <input type="password" placeholder="Re-enter password" name="password2" value={password2}
                    onChange={(e)=>setRePassword(e.target.value)}/>
                    { <span className="passTwoError"></span>}
                    
                    <input type="submit" onClick={collectData}   value={"Confirm"} />
                </form>
                <div className="sign-pic">
                <img src={signUpBackground} alt=""/>
                </div>
            </div>
            <div className="more-ads">
                <div className="ads">
                    <h1 className="ad-space">ِAd space #2</h1>
                    <img src={adIcon} alt=""/>
                    <h3 className="put-ad">Put your Ad here</h3>
                    <h5>200 x 300 pixels</h5>
                    <h3 className="contact-team">contact our team</h3>
                </div>
                <div className="ads">
                    <h1 className="ad-space">ِAd space #3</h1>
                    <img src={adIcon} alt=""/>
                    <h3 className="put-ad">Put your Ad here</h3>
                    <h5>200 x 300 pixels</h5>
                    <h3 className="contact-team">contact our team</h3>
                </div>

            </div>
        </div>
    )
}