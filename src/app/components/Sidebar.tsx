"use client";

import Image from "next/image";
import logo from "/public/assets/logoipsum.svg";
import {
  ArrowTrendingUpIcon,
  ChartPieIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  CogIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tooltip } from "@nextui-org/react";

type SidebarProps = {
  expanded: boolean;
  toggleSidebar: () => void;
};

export default function Sidebar({ expanded, toggleSidebar }: SidebarProps) {
  const pathname = usePathname();

  const menu = [
    {
      name: "Home",
      href: "/",
      icon: <HomeIcon />,
    },
    {
      name: "Markets",
      href: "/markets",
      icon: <ArrowTrendingUpIcon />,
    },
    {
      name: "Analytics",
      href: "/analytics",
      icon: <ChartPieIcon />,
    },
    {
      name: "Settings",
      href: "/settings",
      icon: <CogIcon />,
    },
  ];

  return (
    <>
      <aside
        className={`bg-[#0d111c] flex flex-col h-screen fixed left-0 top-0 py-8 ${
          expanded ? "w-48 items-left" : "w-16 mx-auto"
        } transition-all duration-200 ease-in-out`}
      >
        <div className="ml-4">
          <Image src={logo} alt="logo" height={30} width={30} />
          <div className={`mt-4`}>
            <button
              onClick={toggleSidebar}
              className="transition-all duration-200 ease-in-out p-1"
            >
              {expanded ? (
                <ChevronDoubleLeftIcon className="w-5 h-5" />
              ) : (
                <ChevronDoubleRightIcon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
        <div>
          <ul className="flex flex-col gap-3 mt-10">
            {menu.map((item, index) => (
              <Tooltip
                key={index}
                placement="right"
                content={item.name}
                color="primary"
                size="sm"
                className={`${expanded && "hidden"}`}
              >
                <li key={index}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-2 ${
                      pathname.startsWith(item.href)
                        ? "bg-[#10182D] border-[#5982FE] text-[#5982FE]"
                        : "hover:bg-gray-800"
                    } ${
                      expanded ? "justify-start" : "justify-center"
                    } border-l-2 border-transparent py-2.5 px-2 rounded-sm`}
                  >
                    <div className="h-5 w-5">{item.icon}</div>
                    {expanded && <h3 className="text-xs">{item.name}</h3>}
                  </Link>
                </li>
              </Tooltip>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
