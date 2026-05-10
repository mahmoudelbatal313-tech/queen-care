import { Layout } from "@/components/Layout";
import { useNavigate } from "@tanstack/react-router";
import { Crown } from "lucide-react";

const quickActions = [
  {
    label: "خدمات البشرة",
    icon: "✨",
    to: "/skin-services",
    bg: "bg-primary/10",
    color: "text-primary",
    ocid: "home.skin_button",
  },
  {
    label: "خدمات الشعر",
    icon: "💆",
    to: "/hair-services",
    bg: "bg-secondary/15",
    color: "text-secondary-foreground",
    ocid: "home.hair_button",
  },
  {
    label: "احجزي الآن",
    icon: "📅",
    to: "/booking",
    bg: "bg-primary/10",
    color: "text-primary",
    ocid: "home.booking_button",
  },
  {
    label: "تواصل معنا",
    icon: "📞",
    to: "/contact",
    bg: "bg-secondary/15",
    color: "text-secondary-foreground",
    ocid: "home.contact_button",
  },
];

const featuredServices = [
  {
    id: "vip-facial",
    name: "تنظيف بشرة VIP",
    desc: "جلسة تنظيف ملكية متكاملة",
    duration: "90 دقيقة",
  },
  {
    id: "hydrafacial",
    name: "HydraFacial",
    desc: "ترطيب عميق وتجديد البشرة",
    duration: "60 دقيقة",
  },
  {
    id: "hair-treatment",
    name: "علاج تساقط الشعر",
    desc: "تقنيات متقدمة لتقوية الشعر",
    duration: "45 دقيقة",
  },
];

export function HomePage() {
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Header */}
      <div className="bg-card border-b border-border/40 px-5 pt-12 pb-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-body text-sm text-muted-foreground mb-0.5">
              مرحباً بكِ في
            </p>
            <h1 className="font-display text-2xl font-bold text-foreground">
              كوين كير
            </h1>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Crown size={22} className="text-primary" />
          </div>
        </div>
      </div>

      <div className="px-5 py-6 space-y-8">
        {/* Quick Actions Grid */}
        <section>
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map((action) => (
              <button
                key={action.to}
                type="button"
                data-ocid={action.ocid}
                onClick={() => navigate({ to: action.to })}
                className={`${action.bg} rounded-2xl p-5 flex flex-col items-center gap-3 transition-smooth hover:scale-[0.98] active:scale-95 border border-border/30`}
              >
                <span className="text-3xl">{action.icon}</span>
                <span
                  className={`font-display font-semibold text-sm ${action.color} text-center`}
                >
                  {action.label}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Hero banner */}
        <section
          className="rounded-2xl overflow-hidden relative h-44"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-spa.dim_800x600.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-l from-foreground/60 to-transparent" />
          <div className="absolute inset-0 flex items-end p-5">
            <div className="text-right">
              <p className="font-body text-xs text-card/80 mb-1">
                مركز العناية الملكية
              </p>
              <h3 className="font-display text-xl font-bold text-card leading-tight">
                جمالك يستحق
                <br />
                الأفضل
              </h3>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-lg font-bold text-foreground">
              أبرز الخدمات
            </h2>
            <button
              type="button"
              data-ocid="home.all_services_link"
              onClick={() => navigate({ to: "/skin-services" })}
              className="text-xs font-medium text-primary"
            >
              الكل
            </button>
          </div>
          <div className="space-y-3">
            {featuredServices.map((s, i) => (
              <div
                key={s.id}
                data-ocid={`home.featured.item.${i + 1}`}
                className="bg-card rounded-2xl p-4 flex items-center gap-4 shadow-card border border-border/30 transition-smooth hover:shadow-luxury"
              >
                <div className="w-1 self-stretch bg-primary rounded-full" />
                <div className="flex-1">
                  <h3 className="font-display text-sm font-semibold text-foreground">
                    {s.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {s.desc}
                  </p>
                </div>
                <span className="text-xs text-primary font-medium bg-primary/10 px-2.5 py-1 rounded-full whitespace-nowrap">
                  {s.duration}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
