import { LayoutDashboard, CreditCard, Receipt, Settings, History, Menu } from "lucide-react";

function Sidebar() {
  return (
<div className="relative min-h-screen flex items-center justify-center
w-[260px] md:w-[240px] sm:w-[80px]">

      {/* Back dark sheet */}
      <div className="absolute inset-0 bg-black opacity-90"></div>

      {/* Main sidebar panel */}
<div className="relative w-64 h-[92vh] flex flex-col justify-between bg-gradient-to-b from-[#1b1b1b] via-[#121212] to-black backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.6)] rounded-3xl p-4">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-white font-semibold">
            <div className="w-7 h-7 bg-white rounded-full"></div>
            Payflow
          </div>
          <Menu size={18} className="text-gray-300 cursor-pointer" />
        </div>

        {/* Menu container */}
        <div className="bg-black/50 rounded-[18px] p-2
">

          <ul className="space-y-2 text-sm text-gray-300">

            {/* Active */}
            <li className="flex items-center gap-3 bg-gradient-to-r from-white/30 to-white/3 backdrop-blur-md rounded-xl p-3 text-white cursor-pointer">
              <LayoutDashboard size={18} />
              Dashboard
            </li>

            <li className="flex items-center gap-3 hover:bg-white/10 rounded-xl p-3 cursor-pointer">
              <CreditCard size={18} />
              Cards
            </li>

            <li className="flex items-center gap-3 hover:bg-white/10 rounded-xl p-3 cursor-pointer">
              <Receipt size={18} />
              Receipts
            </li>

            <li className="flex items-center gap-3 hover:bg-white/10 rounded-xl p-3 cursor-pointer">
              <Settings size={18} />
              Manage
            </li>

            <li className="flex items-center gap-3 hover:bg-white/10 rounded-xl p-3 cursor-pointer">
              <History size={18} />
              History
            </li>

          </ul>
        </div>

        {/* Add section */}
<div className="flex items-center gap-2 text-xs text-gray-500 mt-4 cursor-pointer hover:text-gray-300">
  <LayoutDashboard size={14} />
  Add a section
</div>

        {/* Bottom stacked profile area */}
        <div className="mt-8 relative">

          {/* Dark curved sheet behind */}
          <div className="absolute left-0 right-0 bottom-[-20px] h-44 bg-gradient-to-b from-[#1b1b1b] to-black rounded-3xl"></div>

          {/* White floating  */}
          <div className="relative bg-white rounded-2xl p-4 shadow-md">

            <div className="flex items-center gap-3 mb-3">
              <div className="w-15 h-10 rounded-full border-4 border-gray-300 flex items-center justify-center text-xs font-semibold">
                40%
              </div>

              <div>
                <p className="text-sm font-semibold">Complete profile</p>
                <p className="text-xs text-gray-500">
                  Complete your profile to unlock all features
                </p>
              </div>
            </div>

            <button className="w-full bg-gray-200 hover:bg-gray-300 text-sm py-2 rounded-xl">
              Verify identity
            </button>

          </div>

          {/* Bottom user profile */}
          <div className="relative mt-6 flex items-center gap-3 text-white px-2">

            <img
              src="https://i.pravatar.cc/100?img=12"alt="profile"
              className="w-10 h-10 rounded-full"
            />

            <div>
              <p className="text-sm">Robert Doe</p>
              <p className="text-xs text-gray-400">robert@brisk.com</p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Sidebar;
