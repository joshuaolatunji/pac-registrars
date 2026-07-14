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

export function PortalLogin() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button  className="w-auto h-auto bg-black text-white">PACR Portal Login</Button>} />
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