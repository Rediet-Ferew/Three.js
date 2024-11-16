import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import NavItems from "./NavItems";
const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
        <div className="mx-w-7xl">
            <div className="flex justify-between items-center mx-auto py-5 c-space">
                <a className = "text-neutral-400 font-bold text-xl hover:text-white transition-colors" href="/">
                Rediet</a>

                
                    {/* <img src={"/assets/menu.svg"} alt="menu" className="w-6 h-6" /> */}
                   {
                    !isOpen? (
                        <button onClick={toggleMenu}>
                    <TiThMenu className="text-neutral-300 w-6 h-6 hover:text-white focus:outline-none flex sm:hidden" aria-label="Toggle menu"/>
                    </button>
                    ) : (
                        <button onClick={toggleMenu}>
                    <IoClose className="text-neutral-300 w-6 h-6 hover:text-white focus:outline-none flex sm:hidden" aria-label="Toggle menu"/>
                    </button>
                    )
                   }
                   <div className="sm:flex hidden">
                    <NavItems />
                   </div>
                

            </div>
        </div>
    </header>
  )
}

export default NavBar