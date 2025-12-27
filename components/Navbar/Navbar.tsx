"use client";

import { Monitor } from "lucide-react";
import { usePathname } from "next/navigation";
import { DynamicDialog } from "@/components/Bulid Ui/dialog";
import { useState } from "react";
import { Dialog } from "../ui/dialog";
import { SettingButton } from "./Setting";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isMonitorActive = pathname === "/theforge";

  return (
    <div className="w-[90%] mx-auto mt-6 h-20 rounded-2xl bg-white/5 border border-white/10 text-white backdrop-blur-md">
      <div className="p-2 flex items-center justify-between">
        {/* Tab Group */}
        <div className="flex gap-2">
          <div
            onClick={() => {}}
            className={`
          flex items-center gap-3 p-5  rounded-xl cursor-pointer
          transition-all duration-300 group
          ${
            isMonitorActive
              ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              : "text-white/60 hover:bg-white/10 hover:text-white"
          }
        `}
          >
            {/* Icon: ปรับสีตามสถานะ Active */}
            <div
              className={`transition-transform duration-300 ${
                isMonitorActive ? "scale-110" : "group-hover:scale-110"
              }`}
            >
              <Monitor size={20} strokeWidth={isMonitorActive ? 2.5 : 2} />
            </div>

            <span className="font-semibold tracking-wide text-sm">Monitor</span>

            {/* Indicator Dot: จุดเขียวแสดงสถานะทำงาน */}
            {isMonitorActive && (
              <span className="relative flex h-2 w-2 ml-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black/20 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-black/40"></span>
              </span>
            )}
          </div>
        </div>
        <SettingButton/>
      </div>
    </div>
  );
};

export default Navbar;
