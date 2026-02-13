import StatCard from "./StatCard";

function RightPanel() {
  return (
    <div className="w-[260px] space-y-4 flex-shrink-0">

      {/* Total Expenses */}
      <StatCard
        title="Total Expenses"
        amount="$72,421.84"
        change="-8% vs Prev year"
        changeColor="text-red-400"
        bars={[30, 50, 40, 70, 45, 60, 80]}
        barColor="bg-yellow-300"
      />

      {/* Total Income */}
      <StatCard
        title="Total Income"
        amount="$98,248.44"
        change="+14% vs Prev year"
        changeColor="text-green-500"
        bars={[20, 40, 60, 80, 50, 70]}
        barColor="bg-gray-300"
      />

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
