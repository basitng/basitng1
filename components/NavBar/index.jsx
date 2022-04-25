import Image from "next/image";
import React from "react";
import { NavBar, NavMenu } from "./NavBar.styled";

export default function _NavBar() {
  return (
    <NavBar>
      <Image src={"/assets/media/logo.svg"} width={200} height={40} />

      <NavMenu>
        <div></div>
        <div></div>
      </NavMenu>
    </NavBar>
  );
}
