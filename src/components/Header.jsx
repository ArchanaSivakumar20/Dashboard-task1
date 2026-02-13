import { Search, Bell, Mail, SlidersHorizontal } from "lucide-react";

function Header() {
  return (
    <div className="flex items-center justify-between mb-6">

      {/* Search box */}
      <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl shadow-sm w-80">
        <Search size={20} className="text-gray-400" />

        <input
          type="text"
          placeholder="Search anything..."
          className="outline-none text-sm w-full"
        />

        <SlidersHorizontal size={20} className="text-gray-400" />
      </div>

      {/* Right icons */}
      <div className="flex items-center gap-4">

        <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm cursor-pointer">
          <Bell size={20} className="text-gray-500" />
        </div>

        <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm cursor-pointer">
          <Mail size={20} className="text-gray-500" />
        </div>

      </div>

    </div>
  );
}

export default Header;
