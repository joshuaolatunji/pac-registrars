import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { NavigationDropdown } from "./Dropdown";
import type {NavItem} from "./navData"


interface NavItemProps {
  item: NavItem;
}

//Desktop Item
function NavItem({ item }: NavItemProps) {
  const hasDropdown = item.dropdown && item.dropdown.length > 0;

  if (hasDropdown) {
    return <NavigationDropdown item={item} />;
  }

  return (
    <a
      href={item.href ?? "#"}
      className={item.isCta
        ? "inline-flex h-8 w-auto max-w-[70px] items-center justify-center rounded-md bg-red-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        : "text-sm font-medium text-slate-700 transition-colors hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"}
    >
      {item.title}
    </a>
  );
}

// Mobile Item
export function MobileNavItem({ item }: NavItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const hasDropdown = item.dropdown && item.dropdown.length > 0;
  const isPortalLogin = item.triggerStyle === "portallogin";

  if (!hasDropdown) {
    return (
      <a href={item.href ?? "#"} className={item.isCta
        ? "mt-2 flex min-h-10 w-auto max-w-[90px] sm:min-h-11 sm:text-base md:min-h-12 md:text-lg items-center justify-center rounded-md bg-red-600 px-4 text-sm font-semibold text-white hover:bg-white hover:text-black"
        : "flex min-h-11 sm:min-h-12 sm:text-base md:min-h-13 md:text-lg items-center rounded-md px-3 text-sm font-medium text-slate-700 hover:bg-slate-100"}>
        {item.title}
      </a>
    );
  }

  return (
    <div className="border-b border-slate-100 last:border-0">
      <button type="button" onClick={() => setIsOpen((open) => !open)} aria-expanded={isOpen}
        className={
            isPortalLogin
         ? "mt-3 flex h-10 sm:h-11 sm:text-base md:h-12 md:text-lg items-center gap-1 rounded-md bg-slate-800 px-5 text-sm font-semibold text-white transition-colors hover:bg-slate-500"
         :"flex h-10 sm:h-11 sm:text-base md:h-12 md:text-lg items-center gap-1 rounded-md px-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        }>
        {item.title}
        <ChevronDown className={isOpen ? "size-4 rotate-180 transition-transform sm:size-5" : "size-4 transition-transform sm:size-5"} />
      </button>
      {isOpen && (
        <div className="space-y-1 pb-2 pl-5">
          {item.dropdown?.map((dropdownItem) => (
            <a key={dropdownItem.title} href={dropdownItem.href} className="flex min-h-10 sm:min-h-11 sm:text-base md:min-h-12 md:text-lg items-center rounded-md px-3 text-sm text-slate-600 hover:bg-slate-100 hover:text-blue-700">
              {dropdownItem.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default NavItem;
