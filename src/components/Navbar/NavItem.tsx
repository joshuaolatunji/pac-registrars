// import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "../ui/dropdown-menu";

import type { NavItem as NavItemType } from "./types";

interface NavItemProps {
  item: NavItemType;
}

function NavItem({ item }: NavItemProps) {
  const hasDropdown = item.dropdown && item.dropdown.length > 0;

  if (!hasDropdown) {
    return (
      <a
        href={item.href ?? "#"}
        className="text-sm font-medium hover:text-blue-700 transition-colors"
      >
        {item.title}
      </a>
    );
  }

 return (
  <DropdownMenu>
    <DropdownMenuTrigger >
      <button className="flex items-center gap-1 text-sm font-medium hover:text-blue-700 transition-colors">
        {item.title}
        <ChevronDown size={16} />
      </button>
    </DropdownMenuTrigger>

    <DropdownMenuContent className="w-72">
      {item.dropdown?.map((dropdownItem) => (
        <DropdownMenuItem key={dropdownItem.title} >
          <a href={dropdownItem.href}>
            {dropdownItem.title}
          </a>
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
);
}

export default NavItem;