import SidebarItem from "./SidebarItem";
import {
  LayoutDashboard,
  CreditCard,
  Receipt,
  Settings,
  History,
  Menu,
} from "lucide-react";

function Sidebar() {
  return (
    <div className="h-screen w-[240px] bg-black flex items-center justify-center">

      {/* Main sidebar panel */}
      <div className="w-full h-full flex flex-col justify-between bg-gradient-to-b from-[#1b1b1b] via-[#121212] to-black shadow-[0_0_40px_rgba(0,0,0,0.6)] p-4">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-white font-semibold">
            <div className="w-7 h-7 bg-white rounded-full"></div>
            <span className="hidden sm:inline">Payflow</span>
          </div>
          <Menu size={18} className="text-gray-300 cursor-pointer" />
        </div>

        {/* Menu */}
        <div className="flex-1">
          <ul className="space-y-2 text-sm">

            <SidebarItem icon={LayoutDashboard} label="Dashboard" active />
            <SidebarItem icon={CreditCard} label="Cards" />
            <SidebarItem icon={Receipt} label="Receipts" />
            <SidebarItem icon={Settings} label="Manage" />
            <SidebarItem icon={History} label="History" />

          </ul>
        </div>

        {/* Bottom profile */}
        <div className="mt-6 flex items-center gap-3 text-white">
          <img
            src="https://i.pravatar.cc/100?img=12"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
          <div className="hidden sm:block">
            <p className="text-sm">Robert Doe</p>
            <p className="text-xs text-gray-400">robert@brisk.com</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Sidebar;
