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
  XIcon,
  MenuAlt2Icon,
  SearchIcon,
} from "@heroicons/react/outline";

import SideBar from "./SideBar";

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

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* <div className="flex-shrink-0 flex items-center px-4">
                  <img
                    className="h-10 w-auto"
                    src="/images/logo.png"
                    alt="company logo"
                  />
                </div> */}
                <div className="mt-5 flex-1 h-0 overflow-y-auto">
                  <nav className="px-2 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                          "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-gray-500"
                              : "text-gray-400 group-hover:text-gray-500",
                            "mr-4 flex-shrink-0 h-6 w-6"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>
        {/* ------------------------- NAVBAR ------------------------ */}
        <div className="px-5 sticky top-0 z-10 flex-shrink-0 flex h-auto bg-white border-b shadow-[0_2px_1px_rgba(0, 0, 0, 0.05)]">
          <button
            type="button"
            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 flex justify-between h-16">
            <div className="flex-1 flex items-center">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-10 w-auto"
                  src="/images/loginround.png"
                  alt="Company logo is here "
                />
                <div className="font-bold text-xl ml-3">kNOwcancer</div>
              </div>

              <div className="hidden md:flex border rounded-full px-8 ml-36 w-2/4">
                <div className="inset-y-0 left-1 flex items-center pointer-events-none">
                  <SearchIcon
                    className="h-5 w-5 text-black font-light"
                    aria-hidden="true"
                  />
                </div>
                <input
                  id="search-field"
                  className="w-80 pr-2 h-full rounded-full pl-7 py-2 bg-gray border-black text-gray-900 placeholder-[#999999] focus:outline-none focus:placeholder-gray-300 focus:ring-0 focus:border-transparent"
                  placeholder="Search patient, code, messages...."
                  type="search"
                  name="search"
                />
              </div>
            </div>
            <div className="ml-4 hidden md:flex items-center md:ml-6 space-x-4">
              {/* Profile dropdown */}
              {/* <Menu as="div" className="ml-3 relative">
                <div>
                  <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <div className="flex space-x-2 items-center">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <a
                            href={item.href}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            {item.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu> */}
            </div>
          </div>
        </div>
        {/* Static sidebar for desktop */}
        <SideBar />
        <div className="md:pl-52 bg-green flex flex-col flex-1">
          <main className="flex-1 min-h-[calc(100vh-64px)] bg-offWhite p-5">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
