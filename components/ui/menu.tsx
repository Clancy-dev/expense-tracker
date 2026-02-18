"use client"

import * as React from "react"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { Button } from "./button" // Make sure your Button is from shadcn

// Exports for convenience
export const Menu = DropdownMenu.Root
export const MenuTrigger = DropdownMenu.Trigger
export const MenuContent = DropdownMenu.Content
export const MenuItem = DropdownMenu.Item
