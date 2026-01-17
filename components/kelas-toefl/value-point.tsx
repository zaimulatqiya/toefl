import { Star } from "lucide-react";

export function ValuePoint({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1 w-6 h-6 rounded-full bg-[#D4D755]/20 flex items-center justify-center shrink-0 text-[#D4D755]">
        <Star size={14} fill="currentColor" />
      </div>
      <p className="text-lg text-white">{text}</p>
    </div>
  );
}
