import type { ServiceItem } from "@/types";

interface ServiceCardProps {
  service: ServiceItem;
  onClick?: () => void;
}

export function ServiceCard({ service, onClick }: ServiceCardProps) {
  return (
    <div
      data-ocid={`service.card.${service.id}`}
      onClick={onClick}
      onKeyDown={(e) => {
        if ((e.key === "Enter" || e.key === " ") && onClick) onClick();
      }}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      className="relative bg-card rounded-2xl overflow-hidden shadow-card border border-border/40 transition-smooth hover:shadow-luxury cursor-pointer group"
    >
      {/* Gold accent bar on right (RTL) */}
      <div className="absolute top-0 right-0 w-1 h-full bg-primary rounded-r-2xl" />

      <div className="p-5 pr-6">
        {service.icon && (
          <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-3 text-2xl">
            {service.icon}
          </div>
        )}
        <h3 className="font-display text-base font-semibold text-foreground mb-1 leading-snug">
          {service.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {service.description}
        </p>
        {service.duration && (
          <span className="inline-block mt-3 text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
            {service.duration}
          </span>
        )}
      </div>
    </div>
  );
}
