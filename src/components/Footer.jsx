import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6"; 
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { IoIosMailUnread } from "react-icons/io";

function Footer() {
    const data = [
        { icon: FaGithub , url: "https://github.com/abhimanyu-chaudhary"},
        { icon: IoIosMailUnread , url: "meabhi868@gmail.com"},
        { icon: FaLinkedin , url: "https://www.linkedin.com/in/selfmadeabhimanyu"},
        { icon: FaSquareXTwitter , url: "https://www.twitter.com/selfmadeabhi"},
        { icon: FaFacebook , url: "https://www.facebook.com/selfmadeabhimanyu"},
        { icon: FaSquareInstagram , url: "https://www.instagram.com/selfmadeabhimanyu"},
    ]
    return(
        <div className="max-w-screen-sm mx-auto flex gap-3 text-3xl justify-center mt-5">
            {data.map((elem, index) => {
                const IconComponent = elem.icon;
                return (
                    <div key={index} className="">
                           <a target="_blank" href={elem.url} >  
                                 <span className=""> 
                                    <IconComponent className="min-w-10 hover:text-zinc-950 transform transition-transform duration-300 hover:scale-110" /> 
                                </span> 
                           </a>
                    </div>
                )
            })}
        </div>
    )
}
export default Footer;