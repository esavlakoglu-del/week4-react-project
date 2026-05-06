"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Your Name"
    />
  );
}   
