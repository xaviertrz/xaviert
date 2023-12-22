"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGroup, motion } from "framer-motion";

const navItems = {
  "/": {
    name: "about",
  },
  "/experience": {
    name: "experience",
  },
  "/work": {
    name: "work",
  },
  "/education": {
    name: "education",
  },
};

export default function Navbar() {
  let pathname = usePathname() || "/";

  return (
    <LayoutGroup>
      <nav
        className="mb-16 tracking-tight -ml-[9px] flex flex-row items-center relative px-0 pb-0 fade md:overflow-hidden md:relative max-w-2xl mt-8"
        id="nav"
      >
        <div className="flex flex-row space-x-0 items-center w-full justify-start">
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = path === pathname;
            return (
              <Link
                key={path}
                href={path}
                className="transition-all text-white hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle"
              >
                <span className="relative py-[5px] px-[10px]">
                  {name}
                  {path === pathname ? (
                    <motion.div
                      className="absolute h-[2px] top-7 mx-2 inset-0 bg-neutral-200 dark:bg-neutral-800 z-[-1] dark:bg-gradient-to-r from-transparent to-neutral-900"
                      layoutId="sidebar"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  ) : null}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </LayoutGroup>
  );
}
