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

export function PortalLogin() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button  className="w-auto h-8 bg-black text-white">
        PACR Portal Login
        <ChevronDown />
        </Button>} />
      <DropdownMenuContent>
        <DropdownMenuItem>
          <UserIcon />
          Shareholders
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCardIcon />
          Brokers
        </DropdownMenuItem>
        <DropdownMenuItem>
          <SettingsIcon />
          Clients
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem >
          <LogOutIcon />
          Fund Manager API
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )

}