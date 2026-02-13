import { Search, SlidersHorizontal } from "lucide-react";

const data = [
  {
    name: "Segment LLC",
    date: "22 July 2024, 14:43",
    status: "Received",
    amount: "+$200.00",
    img: "https://i.pravatar.cc/40?img=1",
  },
  {
    name: "Kari Rasmussen",
    date: "21 July 2024, 12:22",
    status: "Sent",
    amount: "-$200.00",
    img: "https://i.pravatar.cc/40?img=2",
  },
  {
    name: "FocalPoint",
    date: "21 July 2024, 11:38",
    status: "Payment",
    amount: "-$25.00",
    img: "https://i.pravatar.cc/40?img=3",
  },
  {
    name: "Nataly Craig",
    date: "21 July 2024, 10:22",
    status: "Received",
    amount: "+$200.00",
    img: "https://i.pravatar.cc/40?img=4",
  },
  {
    name: "Lucy Jones",
    date: "20 July 2024, 16:43",
    status: "Received",
    amount: "+$100.00",
    img: "https://i.pravatar.cc/40?img=5",
  },
  {
    name: "Alec Dawson",
    date: "20 July 2024, 14:43",
    status: "Sent",
    amount: "-$64.00",
    img: "https://i.pravatar.cc/40?img=6",
  },
   {
    name: "Segment LLC",
    date: "22 July 2024, 14:43",
    status: "Received",
    amount: "+$200.00",
    img: "https://i.pravatar.cc/40?img=1",
  },
  {
    name: "Kari Rasmussen",
    date: "21 July 2024, 12:22",
    status: "Sent",
    amount: "-$200.00",
    img: "https://i.pravatar.cc/40?img=2",
  },
  {
    name: "FocalPoint",
    date: "21 July 2024, 11:38",
    status: "Payment",
    amount: "-$25.00",
    img: "https://i.pravatar.cc/40?img=3",
  },
  {
    name: "Nataly Craig",
    date: "21 July 2024, 10:22",
    status: "Received",
    amount: "+$200.00",
    img: "https://i.pravatar.cc/40?img=4",
  },
  {
    name: "Lucy Jones",
    date: "20 July 2024, 16:43",
    status: "Received",
    amount: "+$100.00",
    img: "https://i.pravatar.cc/40?img=5",
  },
];

function Transactions() {
  return (
<div className="flex-[2] bg-white/95 backdrop-blur rounded-2xl p-5 shadow-sm min-w-[560px]">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="font-medium">Transactions</p>
          <p className="text-xs text-gray-500">
            You can view your transaction history
          </p>
        </div>

        <div className="flex items-center gap-3 text-gray-400">
          <Search size={16} />
          <SlidersHorizontal size={16} />
        </div>
      </div>

      {/* Table Header */}
     {/* Table Header */}
<div className="grid grid-cols-[2fr_2fr_1fr_1fr] text-xs text-gray-400 border-b pb-2 mb-2">
  <p>Name</p>
  <p>Date</p>
  <p>Status</p>
  <p className="text-right">Amount</p>
</div>


      {/* Rows */}
      <div className="space-y-3">
        {data.map((t, i) => (
          <div
            key={i}
            className="grid grid-cols-4 items-center text-sm"
          >
            {/* Name + profile */}
            <div className="flex items-center gap-3">
              <img src={t.img} className="w-8 h-8 rounded-full" />
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
        ))}
      </div>

      <p className="text-center text-xs text-gray-400 mt-5">
        View all transactions
      </p>
    </div>
  );
}

export default Transactions;
