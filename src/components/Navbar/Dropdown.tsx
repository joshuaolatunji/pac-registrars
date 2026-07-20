import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { NavItem } from "./navData";

interface NavigationDropdownProps {
  item: NavItem;
}

export function NavigationDropdown({ item }: NavigationDropdownProps) {
  const menuItems = item.dropdown ?? [];
  const trigerClassName =
    item.triggerStyle === "portallogin"
    ? "flex h-10 items-center gap-1 rounded-md bg-slate-800 px-5 text-sm font-semibold text-white transition-colors hover:bg-slate-500"
    : "flex h-10 items-center gap-1 rounded-md px-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <button
            type="button"
            className={trigerClassName}
            >
            {item.title}
            <ChevronDown className="size-4" />
          </button>
        }
      />
      <DropdownMenuContent className="min-w-56 p-1.5" align="start" sideOffset={8}>
        {menuItems.map((menuItem) => (
          <DropdownMenuItem
            key={menuItem.title}
            render={<a href={menuItem.href} />}
            className="min-h-10 cursor-pointer px-3 text-sm font-medium text-slate-700"
          >
            {menuItem.title}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
