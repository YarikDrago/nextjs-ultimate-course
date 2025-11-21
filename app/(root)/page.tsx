import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Page = () => {
  console.log("Page rendered");
  return (
    <>
      <h1 className={"h1-bold"}>Welcome to the Ultimate Next.js course!</h1>
      <h1 className={"h1-bold font-inter"}>Welcome to the Ultimate Next.js course!</h1>
      <h1 className={"h1-bold font-space-grotesk"}>Welcome to the Ultimate Next.js course!</h1>
      <p>Some text</p>
      <DropdownMenu>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default Page;
