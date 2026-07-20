import logo from "../../assets/logo.jpg";

function Nav() {
    return(
        <nav className="w-full bg-white shadow-sm">
            <div className="mx-auto flex min-h-16 w-full items-center justify-between px-4 sm:min-h-20 sm:px-6 lg:min-h-24 lg:px-8">
                <a href="/" aria-label="PAC Registrars home" className="flex shrink-0 items-center">
                    <img
                        src={logo}
                        alt="PAC Registrars Logo"
                        className="h-10 w-auto max-w-full object-contain sm:h-12 md:h-14 lg:h-16 xl:h-20"
                    />
                </a>
            </div>  
        </nav>
    )

}

export default Nav
