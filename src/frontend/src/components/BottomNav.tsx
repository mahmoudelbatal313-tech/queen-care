import { Link, useLocation } from "@tanstack/react-router";
import { CalendarDays, Home, Phone, Sparkles } from "lucide-react";

const navItems = [
  { to: "/contact", label: "تواصل", icon: Phone, ocid: "nav.contact" },
  { to: "/booking", label: "احجزي", icon: CalendarDays, ocid: "nav.booking" },
  { to: "/hair-services", label: "الشعر", icon: Sparkles, ocid: "nav.hair" },
  { to: "/skin-services", label: "البشرة", icon: Sparkles, ocid: "nav.skin" },
  { to: "/home", label: "الرئيسية", icon: Home, ocid: "nav.home" },
] as const;

export function BottomNav() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav
      data-ocid="bottom.nav"
      className="fixed bottom-0 right-0 left-0 z-50 bg-card border-t border-border/50 shadow-luxury"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="max-w-md mx-auto flex items-stretch">
        {navItems.map(({ to, label, icon: Icon, ocid }) => {
          const isActive =
            currentPath === to || (to === "/home" && currentPath === "/");
          return (
            <Link
              key={to}
              to={to}
              data-ocid={ocid}
              className={`relative flex flex-col items-center justify-center gap-1 flex-1 py-3 transition-smooth ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon size={20} strokeWidth={isActive ? 2.2 : 1.6} />
              <span className="text-[10px] font-display font-medium leading-none">
                {label}
              </span>
              {isActive && (
                <span className="absolute bottom-0 w-8 h-0.5 bg-primary rounded-t-full" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
