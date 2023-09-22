"use client";
import Link from "next/link";
import { data } from "./data";

const style = {
  title: "font-normal mx-4 text-sm",
  active: "text-black font-medium",
  inactive: "text-gray-600",
  link: "flex font-thin items-center justify-start my-2 p-4 w-full hover:blue-500",
};

export function SidebarItems() {
  return (
    <div>
      {data.map(({ section, content }) => (
        <ul className="border-b py-2 last:border-none" key={section}>
          {content.map((item) => (
            <li key={item.title}>
              <Link href={item.link}>
                <span
                  className={`${style.link} 
                    ${
                      item.link === global.window.location.pathname
                        ? "lg:hover:text-blue-500 bg-gradient-to-r border-r-4 border-blue-500 border-r-4 border-blue-500 from-white to-blue-100 text-blue-500"
                        : style.inactive
                    }`}
                >
                  <span>{item.icon}</span>
                  <span className={style.title}>{item.title}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
