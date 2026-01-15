import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface GetStartedButtonProps extends React.ComponentProps<typeof Button> {
  text?: string;
}

export function GetStartedButton({ text = "Get Started", className, ...props }: GetStartedButtonProps) {
  return (
    <Button className={cn("group relative overflow-hidden", className)} size="lg" {...props}>
      <span className="mr-8 transition-opacity duration-500 group-hover:opacity-0 relative z-10">{text}</span>
      <div className="absolute right-1 top-1 bottom-1 rounded-sm z-20 grid w-12 place-items-center transition-all duration-500 bg-white/20 group-hover:w-[calc(100%-0.5rem)] group-active:scale-95 text-inherit backdrop-blur-sm">
        <ChevronRight size={20} strokeWidth={2.5} aria-hidden="true" />
      </div>
    </Button>
  );
}
