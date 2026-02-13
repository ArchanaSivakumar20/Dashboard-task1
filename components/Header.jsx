import { Menu, Search, Bell, Mail } from "lucide-react";

function Header({ toggleSidebar }) {
  return (
    <div className="flex items-center justify-between p-3 border-b">

      {/* LEFT */}
      <div className="flex items-center gap-3">

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 bg-gray-100 rounded-lg"
          onClick={toggleSidebar}
        >
          <Menu size={20} />
        </button>

        {/* Search Box */}
        <div className="hidden sm:flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg w-64 md:w-80">
          <Search size={16} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm w-full"
          />
        </div>

      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3">

        <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer">
          <Bell size={18} />
        </div>

        <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer">
          <Mail size={18} />
        </div>

      </div>
    </div>
  );
}

export default Header;
