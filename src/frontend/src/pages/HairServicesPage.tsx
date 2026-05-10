import { Layout } from "@/components/Layout";
import { ServiceCard } from "@/components/ServiceCard";
import type { ServiceItem } from "@/types";

const hairServices: ServiceItem[] = [
  {
    id: "hair-loss",
    name: "علاج تساقط الشعر",
    description:
      "بروتوكول متكامل يعالج أسباب التساقط ويُقوي بصيلات الشعر من الجذور",
    category: "hair",
    duration: "60 دقيقة",
    icon: "🌱",
  },
  {
    id: "dandruff",
    name: "علاج القشرة",
    description:
      "جلسة تنظيف عميقة لفروة الرأس تقضي على القشرة وتُوازن إفراز الزهم",
    category: "hair",
    duration: "45 دقيقة",
    icon: "🍃",
  },
  {
    id: "hair-growth",
    name: "إنبات الشعر",
    description: "تقنيات متطورة تحفّز نمو الشعر الجديد وتُكثّف الشعر الخفيف",
    category: "hair",
    duration: "50 دقيقة",
    icon: "✨",
  },
  {
    id: "mesotherapy",
    name: "ميزوثيرابي",
    description: "حقن فيتامينات مباشرة في فروة الرأس لتغذية الشعر وتعزيز نموه",
    category: "hair",
    duration: "40 دقيقة",
    icon: "💉",
  },
  {
    id: "thermal-treatment",
    name: "تريتمنت حراري",
    description: "علاج حراري عميق يُعيد الحيوية والبريق للشعر التالف والجاف",
    category: "hair",
    duration: "55 دقيقة",
    icon: "🔥",
  },
];

export function HairServicesPage() {
  return (
    <Layout>
      <div className="bg-card border-b border-border/40 px-5 pt-12 pb-5">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-1 h-6 bg-secondary rounded-full" />
          <p className="font-body text-sm text-muted-foreground">
            العناية المتخصصة
          </p>
        </div>
        <h1 className="font-display text-2xl font-bold text-foreground">
          خدمات الشعر
        </h1>
      </div>
      <div className="px-5 py-6">
        <div className="grid gap-4">
          {hairServices.map((service, i) => (
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
