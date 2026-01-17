import { LucideIcon } from "lucide-react";

export function FasilitasItem({ icon: Icon, text, highlight = false }: { icon: any; text: string; highlight?: boolean }) {
  return (
    <div className={`flex items-center gap-4 group ${highlight ? "text-[#D4D755]" : "text-gray-200"}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${highlight ? "bg-[#D4D755] text-black" : "bg-white/10 text-white group-hover:bg-[#D4D755] group-hover:text-black transition-colors"}`}>
        <Icon size={16} strokeWidth={2.5} />
      </div>
      <span className="font-medium text-lg">{text}</span>
    </div>
  );
}
