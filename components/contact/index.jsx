import Link from "next/link";
import React from "react";
import { ContactContainer, ContactRow } from "./Contact.styled";

export default function _Contact() {
  return (
    <ContactContainer>
      <div id="contact">
        <Link href="https://web.facebook.com/basit.ng.5" passHref={true}>
          Facebook
        </Link>
        <Link href="https://twitter.com/ajaga_abdbasit" passHref={true}>
          Twitter
        </Link>
        <Link href="https://github.com/basitng" passHref={true}>
          Github
        </Link>
      </div>
    </ContactContainer>
  );
}
