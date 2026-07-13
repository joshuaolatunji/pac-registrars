import Logo from "./Logo";

function Nav() {
    return(
        <nav className="w-full bg-white shadow-sm"> 
            <div className="flex mx-auto max-w-5xl items-center justify-between px-8 py-5">
               <Logo />
                {/* <img src="https://www.pacregistrars.com/logo.jpg" alt="" className="h-12" /> */}
            </div>
              
        </nav>
    )

}

export default Nav