import malero from "../images/Untitled-10@3x@3x 1.png"
import upload from "../images/upload 1.png"
import freeIcon from "../images/free 1.png"
import goldIcon from "../images/crown 1.png"
import diamondIcon from "../images/diamond 1.png"
import arrow from "../images/Arrow 1.png"
export default function Main(){
    return(
        <main>
        <div id="home" className="home">
            <div className="home-content">
                <img className="logo" src={malero} alt=""/>
                <p className="first">
                    Harnessing Deep Learning for Evasive PDF Malware Detection, 
                    Pioneering a New Frontier with Efficient Net and Image Transformation.
                </p>
                <form action="upload.php" method="post" enctype="multipart/form-data">
                    <label for="file">Upload/drag and drop your PDF </label>
                    <input className="input-pdf" type="file" name="file" id="file"  onchange="uploadFile(this)"/>
                    <img src={upload} alt="" onclick="document.getElementById('file').click()"/>
                </form>

                <p className="second">
                    By submitting data above, you are agreeing to our Terms of Service and Privacy Policy,
                    and to the sharing of your Sample submission with the security community. 
                    Please do not submit any personal information;
                    VirusTotal is not responsible for the contents of your submission.
                </p>
            </div>
        </div> 
        <hr className="home-end"/>
        <div id="premium" className="premium">
            <div className="premium-content">
                <h2>Try Premium Malero</h2>
                <div className="packages">
                    <div className="free">
                        <img src={freeIcon}  alt=""/>
                        <h3>Free</h3>
                        <span></span>
                        <h4>Limited usage</h4>
                        <h4>Ads </h4>
                        <button className="freeBtn"><div>More </div> <img src={arrow} alt=""/></button>
                    </div>
                    <div className="gold">
                        <img src={goldIcon}  alt=""/>
                        <h3>Gold</h3>
                        <span>5$ per Month</span>
                        <h4>Limited usage</h4>
                        <h4>No Ads </h4>
                        <button className="goldBtn"><div>More </div> <img src={arrow} alt=""/></button>
                    </div>
                    <div className="diamond">
                        <img src={diamondIcon}  alt=""/>
                        <h3>Diamond</h3>
                        <span>15$ per Month</span>
                        <h4>Un Limited usage</h4>
                        <h4>No Ads </h4>
                        <button className="diamondBtn"><div>More </div> <img src={arrow} alt=""/></button>
                    </div>
                </div>
            </div>
            <hr className="premium-end"/>
        </div>
    </main>
    )
}