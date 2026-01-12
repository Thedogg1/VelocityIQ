import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = false }: CardProps) {
  const baseStyles =
    "bg-white rounded-xl border border-[var(--color-border-subtle)] p-8";
  const hoverStyles = hover
    ? "hover:shadow-lg hover:border-[var(--color-primary)] transition-all duration-300"
    : "";
  
  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}













































