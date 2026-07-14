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



export function DropdownMenuIcons() {
  return (
    <div className=" flex gap-3 items-center">   
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" className="w-auto h-auto">About Us</Button>} />
      <ChevronDown />
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
    </DropdownMenu>

    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" className="w-fit h-auto">Services</Button>} />
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
    </DropdownMenu>


     <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" className="w-fit h-auto">Product</Button>} />
      <DropdownMenuContent>
        <DropdownMenuItem>
          <UserIcon />
          ProptyPlus
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>


    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" className="w-fit h-auto">Resources</Button>} />
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
    </DropdownMenu>


    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" className="w-fit h-auto">Contact Us</Button>} />
    </DropdownMenu>
    
    </div>
    
  )
}
