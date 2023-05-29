import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  CalendarIcon,
  HomeIcon,
  InboxIcon,
  LogoutIcon,
  UserIcon,
  ChatIcon,
  PlayIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon, current: true },
  {
    name: "Q&A",
    href: "/questions",
    icon: ChatIcon,
    current: false,
  },
  {
    name: "Video",
    href: "/video",
    icon: PlayIcon,
    current: false,
  },
  {
    name: "Profile",
    href: "/profile",
    icon: UserIcon,
    current: false,
  },
  {
    name: "Support",
    href: "/support",
    icon: InboxIcon,
    current: false,
  },
  {
    name: "Review",
    href: "/review",
    icon: InboxIcon,
    current: false,
  },
  {
    name: "Privacy & Policy",
    href: "/privacy",
    icon: CalendarIcon,
    current: false,
  },
  {
    name: "Terms & Conditions",
    href: "/terms",
    icon: InboxIcon,
    current: false,
  },

  { name: "logout", href: "/", icon: LogoutIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const SideBar = () => {
  return (
    <div className="hidden md:flex md:w-52 md:flex-col md:fixed md:inset-y-0">
      {/* Sidebar component, swap this element with another sidebar if you like */}

      <div className="flex flex-col flex-grow border-r border-gray-200 pt-10 bg-white overflow-y-auto">
        {/* <div className="flex  flex-shrink-0 px-4">
              <img
                className="h-10 w-auto"
                src="/images/logo.svg"
                alt="Workflow"
              />
            </div> */}
        <div className="Background w-52 h-48 flex justify-center">
          <img src={"/images/adminimg.png"} className=" absolute w-28 pt-2" />
          <p className="absolute font-bold pt-32">John Smith</p>
          <p className="pt-36">Admin</p>
        </div>
        <div className="mt-3 flex-grow flex flex-col">
          <nav className="flex-1 px-2 pb-4 space-y-1">
            {navigation.map((item) => (
              <Link href={item.href} legacyBehavior>
                <a
                  key={item.name}
                  className={classNames(
                    item.current
                      ? " text-[#936CAB]"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                    "group flex items-center px-2 py-1 text-sm font-medium rounded-md"
                  )}
                >
                  <item.icon
                    className={classNames(
                      item.current
                        ? "text-[#936CAB]"
                        : "text-gray-400 group-hover:text-gray-500",
                      "mr-3 flex-shrink-0 h-6 w-6"
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
