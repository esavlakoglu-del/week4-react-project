"use client";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex gap-4 mb-6">

      <Link href="/">
        Home
      </Link>

      <Link href="/contact">
        Contact
      </Link>

    </nav>
  );
}
