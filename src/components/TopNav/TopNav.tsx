import { useState } from "react";
import { DarkSide } from "@theme-toggles/react";
import BruhdotLogo from "../../assets/bruh-dot-times.svg?react";

const TopNav = () => {
  const [light, setLight] = useState(true);
  console.log({ light });

  return (
    <div className="w-full px-6 pt-6 flex justify-between items-center">
      <BruhdotLogo className="w-36 h-5 fill-logo-light dark:fill-logo-dark" />
      <DarkSide
        className="light-mode-toggle duration-500 transition-all"
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
    </div>
  );
};

export { TopNav };
