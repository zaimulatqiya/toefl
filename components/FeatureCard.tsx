"use client";

import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";
import Link from "next/link";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor: string;
  iconBg: string;
  delay?: number;
  href?: string;
  onClick?: () => void;
}

export const FeatureCard = ({ icon: Icon, title, description, iconColor, iconBg, delay = 0, href, onClick }: FeatureCardProps) => {
  const CardContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group flex items-center justify-between p-6 bg-white dark:bg-card border border-border rounded-2xl shadow-sm hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer h-full"
      onClick={onClick}
    >
      <div className="flex items-center gap-5">
        <div className={`p-3.5 rounded-xl ${iconBg} flex items-center justify-center`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        <div className="text-left">
          <h3 className="font-semibold text-foreground text-lg">{title}</h3>
          <p className="text-muted-foreground text-sm mt-0.5">{description}</p>
        </div>
      </div>

      <div className="text-muted-foreground group-hover:text-primary transition-colors transform group-hover:translate-x-1 duration-300 pl-4">
        <ArrowRight className="w-5 h-5" />
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {CardContent}
      </Link>
    );
  }

  return CardContent;
};
