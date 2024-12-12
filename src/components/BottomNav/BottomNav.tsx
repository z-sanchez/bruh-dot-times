import { useState } from "react";
import {
  PiBookmarkSimple,
  PiBookmarkSimpleFill,
  PiHouseFill,
  PiHouse,
} from "react-icons/pi";

const NAV_OPTIONS = [
  {
    selectedIcon: <PiHouseFill size={24} />,
    nonSelectedIcon: <PiHouse size={24} />,
    text: "Home",
    id: "home",
  },
  {
    selectedIcon: <PiBookmarkSimpleFill size={24} />,
    nonSelectedIcon: <PiBookmarkSimple size={24} />,
    text: "Saved",
    id: "saved",
  },
];

const BottomNav = () => {
  const [selectedIcon, setSelectedIcon] = useState("home");

  return (
    <div className="bg-slate-200 w-full flex items-center justify-center">
      {NAV_OPTIONS.map((option) => {
        return (
          <div
            key={option.id}
            className="text-slate-800 mx-5 py-2 w-1/5 flex items-center flex-col"
            onClick={() => setSelectedIcon(option.id)}
          >
            {option.id === selectedIcon
              ? option.selectedIcon
              : option.nonSelectedIcon}
            <p>{option.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export { BottomNav };
