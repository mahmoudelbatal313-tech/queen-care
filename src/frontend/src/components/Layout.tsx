import type { ReactNode } from "react";
import { BottomNav } from "./BottomNav";

interface LayoutProps {
  children: ReactNode;
  showNav?: boolean;
}

export function Layout({ children, showNav = true }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col" dir="rtl">
      <main
        className={`flex-1 max-w-md mx-auto w-full ${showNav ? "pb-20" : ""}`}
      >
        {children}
      </main>
      {showNav && <BottomNav />}
    </div>
  );
}
