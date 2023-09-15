import React, { ReactNode } from "react";

interface ContentProps {
  title: string;
  details: string;
  icon: ReactNode;
  children: ReactNode;
}

export function Content(props: ContentProps) {
  return (
    <div className="flex flex-col flex-wrap sm:flex-row">
      <div className="w-full">
        <div className="mb-4">
          <div className="w-full rounded-2xl bg-white p-4 shadow-lg">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center">
                <span className="relative rounded-xl bg-blue-100 p-2 font-bold">
                  {props.icon}
                </span>
                <div className="flex flex-col">
                  <span className="ml-2 font-bold text-black">
                    {props.title}
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    {props.details}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex min-h-full flex-col justify-center px-6 pb-5 lg:px-8">
              {props.children}
            </div>
            <div className="flex -space-x-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
