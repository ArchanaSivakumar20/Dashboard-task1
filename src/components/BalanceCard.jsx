import { Send, ArrowDownCircle, MoreHorizontal } from "lucide-react";

function BalanceCard() {
  return (
    <div className="w-[300px]">

      {/* Top dark card */}
      <div className="bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] text-white rounded-2xl p-5 shadow-md">

        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-gray-300">Total Balance</p>
            <p className="text-xs text-gray-400">Available for use</p>
          </div>

          <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-lg text-sm">
            🇺🇸 USD
          </div>
        </div>

        {/* White inner card */}
        <div className="bg-white text-black rounded-xl p-4 shadow-inner">

          <p className="text-sm text-gray-500 mb-1">Available Funds</p>
          <h2 className="text-3xl font-semibold mb-4">$18,248.44</h2>

          {/* Buttons */}
          <div className="flex gap-6 text-sm">

            <button className="flex items-center gap-2 text-gray-700 hover:text-black">
              <Send size={16} />
              Send
            </button>

            <button className="flex items-center gap-2 text-gray-700 hover:text-black">
              <ArrowDownCircle size={16} />
              Request
            </button>

          </div>
        </div>
      </div>

      {/* Recent Contacts Card */}
      <div className="bg-white rounded-2xl p-5 shadow-sm mt-4">

        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="font-medium">Recent Contacts</p>
            <p className="text-xs text-gray-500">
              Send or Request from your contact list
            </p>
          </div>

          <MoreHorizontal size={18} className="text-gray-400" />
        </div>

        {/* Avatars */}
        <div className="flex gap-3 mb-4">
          <img src="https://i.pravatar.cc/40?img=1" className="w-9 h-9 rounded-full" />
          <img src="https://i.pravatar.cc/40?img=2" className="w-9 h-9 rounded-full" />
          <img src="https://i.pravatar.cc/40?img=3" className="w-9 h-9 rounded-full" />
          <img src="https://i.pravatar.cc/40?img=4" className="w-9 h-9 rounded-full" />
          <img src="https://i.pravatar.cc/40?img=5" className="w-9 h-9 rounded-full" />
        </div>

        {/* Buttons */}
        <div className="flex gap-3">

          <button className="flex-1 bg-gray-100 hover:bg-gray-200 py-2 rounded-xl text-sm">
            Add new
          </button>

          <button className="flex-1 border border-gray-200 hover:bg-gray-50 py-2 rounded-xl text-sm">
            Manage
          </button>

        </div>

      </div>

      {/* Footer text */}
      <p className="text-xs text-gray-400 text-center mt-4">
        Add or Manage widgets
      </p>

    </div>
  );
}

export default BalanceCard;
