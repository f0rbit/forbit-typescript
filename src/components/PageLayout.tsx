// consistent background
// width scales automatically, nicely centred on large screens
// increases width to full on mobile,]

import { ReactNode } from "react";
import NavBar from "src/components/NavBar";

export const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="min-w-screen min-h-screen bg-neutral-800">
        <NavBar noicon={false} />
        <div className="justify-center flex mx-4">
          <div className="w-full text-white lg:w-3/4 xl:w-2/3 2xl:1/2">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
