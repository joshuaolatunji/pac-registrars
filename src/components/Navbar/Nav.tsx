// import { ContactUs } from "./ContactUs";
import { DropdownMenuIcons } from "./Dropdown";
import EdmmsBadge from "./EdmmsBadge";
import Logo from "./Logo";
import { PortalLogin } from "./PortalLogin";

function Nav() {
    return(
        <nav className="w-full bg-white shadow-sm"> 
            <div className="flex mx-auto w-full items-center justify-between px-6 py-5">
                <div className="ml-20">
                     <Logo />
                </div>
              

               <div className="ml-ato flex items-center gap-6">
                    <DropdownMenuIcons/>
                    {/* <ContactUs /> */}
                    <EdmmsBadge />
                    <PortalLogin />
               </div>
              
               
            </div>
              
        </nav>
    )

}

export default Nav