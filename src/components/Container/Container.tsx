import { ReactNode } from "react";
// import { BottomNav } from "../BottomNav";
import { TopNav } from "../TopNav";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="dark:bg-neutral-800 h-full ease-in-out w-full flex justify-between items-center flex-col">
      <TopNav />
      {children}
      {/* <BottomNav /> */}
    </div>
  );
};

export { Container };
