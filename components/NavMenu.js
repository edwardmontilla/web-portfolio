import React from "react";
import Link from "next/link";
import { PiSailboatFill } from "react-icons/pi";

// import { FaFish } from "react-icons/fa6";

// add hover color and other things
// 

const NavMenu = () => {
    return (
        <nav className="flex items-center justify-end ml-20 text-white">
            {/* <div className="flex items-center p-[3px] w-16 border-2 border-secondary/50 bg-accent/40 rounded-xl">
                <Link href="/">
                    <PiSailboatFill size={35}/>
                </Link>
            </div> */}
            

            <div className="flex justify-end gap-4 mr-8 text-center">

                <div className="p-2">
                    <Link href="/"> {/* page.js */}
                        Home
                    </Link>
                </div>
                <div className="p-2">
                    <Link href="./about"> {/* Description about me on a separate page, might include photos of hobbies  */}
                        About Me
                    </Link>
                </div>
                <div className="p-2">
                    <Link href="./about"> {/* will scroll down to projects section  */}
                        Projects
                    </Link>
                </div>
                <div className="p-2">
                    <Link href="/"> {/* will scroll down to contact section  */}
                        Contact
                    </Link>
                </div>
            </div>
                
        </nav>
    );
}

export default NavMenu;