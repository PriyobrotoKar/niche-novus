"use client";
import React from "react";
import SidebarToggle from "./SidebarToggler";
import { getTimeOfDay } from "@/lib/utils";

export const Header = () => {
  return (
    <header className="text-xl  border-b-2 border-border py-5 flex justify-between items-center">
      <div>
        Good {getTimeOfDay()}, <span className="text-accent">Nishad.</span>
      </div>
      <SidebarToggle />
    </header>
  );
};
