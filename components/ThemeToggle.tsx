"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDark(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");

    if (dark) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }, [dark]);

  return (
    <button onClick={() => setDark(!dark)}>
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}