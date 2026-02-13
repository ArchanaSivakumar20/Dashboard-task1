function TransactionRow({ t }) {
  return (
    <div className="grid grid-cols-[2fr_2fr_1fr_1fr] items-center text-sm">

      {/* Name + profile */}
      <div className="flex items-center gap-3">
        <img src={t.img} alt="profile" className="w-8 h-8 rounded-full" />
        <p>{t.name}</p>
      </div>

      {/* Date */}
      <p className="text-gray-500 text-xs">{t.date}</p>

      {/* Status */}
      <div className="flex items-center gap-2">
        <span
          className={`w-2 h-2 rounded-full ${
            t.status === "Received"
              ? "bg-green-500"
              : t.status === "Sent"
              ? "bg-blue-500"
              : "bg-pink-500"
          }`}
        ></span>
        <p className="text-gray-700">{t.status}</p>
      </div>

      {/* Amount */}
      <p className="text-right font-medium">{t.amount}</p>

    </div>
  );
}

export default TransactionRow;
