function RightPanel() {
  return (
<div className="w-[260px] space-y-4 flex-shrink-0">

      {/* Total Expenses */}
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <p className="text-sm text-gray-500">Total Expenses</p>
        <h2 className="text-xl font-semibold">$72,421.84</h2>
        <p className="text-xs text-red-400 mb-3">-8% vs Prev year</p>

        <div className="flex gap-2 items-end h-20">
          {[30, 50, 40, 70, 45, 60].map((h, i) => (
            <div
              key={i}
              className="w-4 bg-yellow-300 rounded"
              style={{ height: `${h}%` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Total Income */}
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <p className="text-sm text-gray-500">Total Income</p>
        <h2 className="text-xl font-semibold">$98,248.44</h2>
        <p className="text-xs text-green-500 mb-3">+14% vs Prev year</p>

        <div className="flex gap-2 items-end h-20">
          {[20, 40, 60, 80, 50, 70].map((h, i) => (
            <div
              key={i}
              className="w-4 bg-gray-300 rounded"
              style={{ height: `${h}%` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Exchange */}
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <p className="font-medium mb-3">Exchange</p>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>USD</span>
            <span>300</span>
          </div>
          <div className="flex justify-between">
            <span>EUR</span>
            <span>275.68</span>
          </div>
        </div>

        <button className="w-full mt-4 bg-black text-white py-2 rounded-xl">
          Exchange
        </button>
      </div>

    </div>
  );
}

export default RightPanel;