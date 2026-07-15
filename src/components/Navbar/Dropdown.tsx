"use client"

import {
  CreditCardIcon,
  LogOutIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { ChevronDown } from 'lucide-react';

import {useState} from "react";




export function DropdownMenuIcons() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  return (
    <div className=" flex gap-3 items-center">
  
    <DropdownMenu open={openMenu === "about"} onOpenChange={(open) => setOpenMenu(open ? "about" : null)}>

       <div
    onMouseEnter={() => setOpenMenu("about")}
    onMouseLeave={() => setOpenMenu(null)}
    >
      <DropdownMenuTrigger render={<Button variant="ghost" className="w-auto h-auto">
        About Us
        <ChevronDown />
      </Button>} />
      <DropdownMenuContent>
        <DropdownMenuItem>
          <UserIcon />
          Overview
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCardIcon />
          Leadership
        </DropdownMenuItem>
        <DropdownMenuItem>
          <SettingsIcon />
          Management
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem >
          <LogOutIcon />
          Clients
        </DropdownMenuItem>
      </DropdownMenuContent>
      </div>
    </DropdownMenu>

    <DropdownMenu open={openMenu === "Services"} onOpenChange={(open) => setOpenMenu(open ? "services" : null)}>
         <div
    onMouseEnter={() => setOpenMenu("Services")}
    onMouseLeave={() => setOpenMenu(null)}
    >
      <DropdownMenuTrigger render={<Button variant="outline" className="w-fit h-auto">
        Services
        <ChevronDown />
        </Button>} />
      <DropdownMenuContent>
        <DropdownMenuItem>
          <UserIcon />
          Securities Register Management
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCardIcon />
          Document Management
        </DropdownMenuItem>
        <DropdownMenuItem>
          <SettingsIcon />
          Company Secretarial
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem >
          <LogOutIcon />
            Probate / Transmission
        </DropdownMenuItem>
        <DropdownMenuItem >
          <LogOutIcon />
            KYC Services
        </DropdownMenuItem>
        <DropdownMenuItem >
          <LogOutIcon />
            Web Registry
        </DropdownMenuItem>
        <DropdownMenuItem >
          <LogOutIcon />
            Electronic Repository System
        </DropdownMenuItem>
      </DropdownMenuContent>
      </div>
    </DropdownMenu>


     <DropdownMenu open={openMenu === "Product"} onOpenChange={(open) => setOpenMenu(open ? "Product" : null)}>
         <div
    onMouseEnter={() => setOpenMenu("Product")}
    onMouseLeave={() => setOpenMenu(null)}
    >
      <DropdownMenuTrigger render={<Button variant="outline" className="w-fit h-auto">
        Product
        <ChevronDown />
        </Button>} />
      <DropdownMenuContent>
        <DropdownMenuItem>
          <UserIcon />
          ProptyPlus
        </DropdownMenuItem>
      </DropdownMenuContent>
       </div>
    </DropdownMenu>


    <DropdownMenu open={openMenu === "Resources"} onOpenChange={(open) => setOpenMenu(open ? "Resources" : null)}>
         <div
    onMouseEnter={() => setOpenMenu("Resources")}
    onMouseLeave={() => setOpenMenu(null)}
    >
      <DropdownMenuTrigger render={<Button variant="outline" className="w-fit h-auto">
        Resources
        <ChevronDown />
        </Button>} />
      <DropdownMenuContent>
        <DropdownMenuItem>
          <UserIcon />
          Copmany's Annual Budget
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCardIcon />
          Forms
        </DropdownMenuItem>
        <DropdownMenuItem>
          <SettingsIcon />
          FAQs
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem >
          <LogOutIcon />
            Media
        </DropdownMenuItem>
      </DropdownMenuContent>
      </div>
    </DropdownMenu>

    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" className="w-fit h-auto">Contact Us</Button>} />
    </DropdownMenu>
      </div>  
    
  )
}
