"use client";

import React from "react";
import Link from "next/link";
import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import Container from "@/components/ui/container";
import Logo from "@/components/ui/logo";
import Routes from "@/config/routes";

const LogoHeader = () => {
  return (
    <Link className="block h-9 pr-3 hover:opacity-70" href="/">
      <Logo />
    </Link>
  );
};

export default function Header() {
  const items: MenuItem[] = Routes.filter((route) => route.inMenu);

  return (
    <header className="bg-white fixed top-0 left-0 w-full z-10 shadow-sm">
      <Container>
        <Menubar
          model={items}
          start={<LogoHeader />}
          className="bg-transparent border-none"
        />
      </Container>
    </header>
  );
}
