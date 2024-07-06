"use client";

import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  return (
    <>
      <nav
        className="flex justify-between items-center relative shadow-sm font-roboto py-4"
        role="navigation"
      >

        <div>
        <a
          href="https://erickmedel.dev"
          target="_blank"
          className="pl-8 pr-1 !text-white"
        >
          Erick Medel
        </a>

        - Example Blog
        </div>
       
        <div className="pr-8">
          <a href="/" className="">
            {pathname === "/" ? "" : "Posts"}
          </a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
