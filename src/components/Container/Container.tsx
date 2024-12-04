import { ReactNode, useState } from "react";
import { DarkSide } from "@theme-toggles/react";
import { BottomNav } from "../BottomNav";

const Container = ({ children }: { children: ReactNode }) => {
  const [light, setLight] = useState(true);
  console.log({ light });

  return (
    <div className="dark:bg-neutral-800 duration-500 transition-all ease-in-out  w-screen h-screen flex justify-between items-center flex-col">
      <DarkSide
        className="pt-10 light-mode-toggle"
        duration={750}
        toggled={light}
        onToggle={() => {
          document.body.classList.toggle("dark");
          setLight((state) => !state);
        }}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
      {children}
      <BottomNav />
    </div>
  );
};

export { Container };
