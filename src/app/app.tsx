"use client";

import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function App({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(false);
  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="flex items-start">
        <Sidebar expanded={expanded} toggleSidebar={toggleSidebar} />
        <div
          className={`flex-1 flex flex-col gap-24 fixed top-0 right-0 ml-10 ${
            expanded ? "left-48" : "left-16"
          } transition-all ease-in-out duration-200 `}
        >
          <div className="z-50">
            <Header />
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}
