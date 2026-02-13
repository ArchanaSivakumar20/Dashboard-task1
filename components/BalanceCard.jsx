import { Send, ArrowDownCircle } from "lucide-react";

function BalanceCard({ balance, currency, country }) {
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
            {country} {currency}
          </div>
        </div>

        {/* White inner card */}
        <div className="bg-white text-black rounded-xl p-4 shadow-inner">

          <p className="text-sm text-gray-500 mb-1">Available Funds</p>
          <h2 className="text-3xl font-semibold mb-4">
            {currency}{balance}
          </h2>

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

    </div>
  );
}

export default BalanceCard;
