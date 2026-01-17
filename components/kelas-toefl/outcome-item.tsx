export function OutcomeItem({ text }: { text: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-16 h-1 bg-[#D4D755] rounded-full" />
      <p className="font-medium text-lg text-gray-300">{text}</p>
    </div>
  );
}
