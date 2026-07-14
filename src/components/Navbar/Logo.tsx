import logo from "../../assets/logo.jpg";

function Logo() {
    return(
        <img
        src={logo}
        alt="PAC Registrars Logo"
        className="h-12 w-auto object-contain cursor-pointer"
        />
    )
}

export default Logo;