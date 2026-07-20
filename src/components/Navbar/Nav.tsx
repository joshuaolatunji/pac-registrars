import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/logo.jpg";
import { navItems } from "./navData";
import NavItem, { MobileNavItem } from "./NavItem";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative w-full bg-white shadow-sm">
      <div className="flex min-h-16 w-full px-5 py-5 sm:px-8 lg:min-h-22 lg:px-12 xl:px-16">
        
        {/* Logo */}
        <a href="/" aria-label="PAC Registrars home" className="flex shrink-0 items-center">
          <img
            src={logo}
            alt="PAC Registrars Logo"
            className="h-5 w-auto max-w-full cursor-pointer object-contain md:h-9 lg:h-13"
          />
        </a>

        {/* Dropdown */}
        <div className="ml-auto hidden items-center gap-3 lg:flex xl:gap-5">
          {navItems.map((item) => <NavItem key={item.title} item={item} />)}
        </div>

        {/* Mobile View */}
        <button
          type="button"
          className="ml-auto gap-8 flex size-11 items-center justify-center rounded-md text-slate-700 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto max-w-7xl space-y-1 px-4 py-3 sm:px-6">
            {navItems.map((item) => <MobileNavItem key={item.title} item={item} />)}
          </div>
        </div>

      )}


    </nav>
  );
}

export default Nav;
