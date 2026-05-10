import { Layout } from "@/components/Layout";
import { ServiceCard } from "@/components/ServiceCard";
import type { ServiceItem } from "@/types";

const skinServices: ServiceItem[] = [
  {
    id: "vip-clean",
    name: "تنظيف بشرة VIP",
    description:
      "جلسة تنظيف ملكية متكاملة تُعيد للبشرة توهجها الطبيعي بأحدث التقنيات",
    category: "skin",
    duration: "90 دقيقة",
    icon: "👑",
  },
  {
    id: "hydrafacial",
    name: "HydraFacial",
    description:
      "تقنية عالمية لترطيب عميق وتقشير لطيف وتجديد البشرة في جلسة واحدة",
    category: "skin",
    duration: "60 دقيقة",
    icon: "💧",
  },
  {
    id: "skin-booster",
    name: "Skin Booster",
    description: "حقن ترطيب بحمض الهيالورونيك للحصول على بشرة ممتلئة ومضيئة",
    category: "skin",
    duration: "45 دقيقة",
    icon: "✨",
  },
  {
    id: "dermapen",
    name: "Dermapen",
    description: "علاج بالإبر الدقيقة لتحفيز الكولاجين وتقليل الندوب والخطوط",
    category: "skin",
    duration: "50 دقيقة",
    icon: "🌿",
  },
  {
    id: "cold-peel",
    name: "تقشير بارد",
    description: "تقشير لطيف يُجدد طبقة البشرة الخارجية ويمنحها نعومة استثنائية",
    category: "skin",
    duration: "40 دقيقة",
    icon: "❄️",
  },
  {
    id: "glow-session",
    name: "جلسة نضارة",
    description: "جلسة شاملة لإشراق البشرة تجمع بين التنظيف والترطيب والتفتيح",
    category: "skin",
    duration: "75 دقيقة",
    icon: "🌸",
  },
];

export function SkinServicesPage() {
  return (
    <Layout>
      <div className="bg-card border-b border-border/40 px-5 pt-12 pb-5">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-1 h-6 bg-primary rounded-full" />
          <p className="font-body text-sm text-muted-foreground">
            العناية المتخصصة
          </p>
        </div>
        <h1 className="font-display text-2xl font-bold text-foreground">
          خدمات البشرة
        </h1>
      </div>
      <div className="px-5 py-6">
        <div className="grid gap-4">
          {skinServices.map((service, i) => (
            <div
              key={service.id}
              className="animate-fade-in"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
