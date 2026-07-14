import type {IconType} from "react-icons";

export interface NavItem {
    title: string;
    href?: string;
    dropdown?:DropdownItem[]
}

export interface DropdownItem {
    title: string;
    href: string;
    icon?: IconType;
}