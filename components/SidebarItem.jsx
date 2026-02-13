function SidebarItem({ icon: Icon, label, active }) {
  return (
    <li
      className={`flex items-center gap-3 rounded-xl p-3 cursor-pointer transition
      ${active
        ? "bg-gradient-to-r from-white/30 to-white/5 text-white"
        : "hover:bg-white/10 text-gray-300"}`}
    >
      <Icon size={18} />
      <span>{label}</span>
    </li>
  );
}

export default SidebarItem;
