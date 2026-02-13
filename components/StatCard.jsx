function StatCard({ title, amount, change, changeColor, bars, barColor }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm">

      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-xl font-semibold">{amount}</h2>
      <p className={`text-xs mb-3 ${changeColor}`}>{change}</p>

      {/* Bar Graph */}
      <div className="flex gap-2 items-end h-20">
        {bars.map((h, i) => (
          <div
            key={i}
            className={`w-4 rounded ${barColor}`}
            style={{ height: `${h}%` }}
          ></div>
        ))}
      </div>

    </div>
  );
}

export default StatCard;
