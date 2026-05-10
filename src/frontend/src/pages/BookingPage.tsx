import { Layout } from "@/components/Layout";
import { useState } from "react";

const allServices = [
  "تنظيف بشرة VIP",
  "HydraFacial",
  "Skin Booster",
  "Dermapen",
  "تقشير بارد",
  "جلسة نضارة",
  "علاج تساقط الشعر",
  "علاج القشرة",
  "إنبات الشعر",
  "ميزوثيرابي",
  "تريتمنت حراري",
];

const WHATSAPP_NUMBER = "201113777031";

export function BookingPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
  });

  const handleWhatsApp = () => {
    if (!form.name || !form.phone || !form.service || !form.date) return;
    const msg = encodeURIComponent(
      `مرحباً، أود حجز موعد في Queen Care\nالاسم: ${form.name}\nرقم الهاتف: ${form.phone}\nالخدمة: ${form.service}\nالتاريخ: ${form.date}`,
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  const isReady = form.name && form.phone && form.service && form.date;

  return (
    <Layout>
      <div className="bg-card border-b border-border/40 px-5 pt-12 pb-5">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-1 h-6 bg-primary rounded-full" />
          <p className="font-body text-sm text-muted-foreground">سريعة وسهلة</p>
        </div>
        <h1 className="font-display text-2xl font-bold text-foreground">
          احجزي موعدك
        </h1>
      </div>

      <div className="px-5 py-6">
        <div className="bg-card rounded-3xl p-5 shadow-card border border-border/30 space-y-5">
          <div className="space-y-2">
            <label
              htmlFor="booking-name"
              className="font-display text-sm font-semibold text-foreground block"
            >
              الاسم الكريم
            </label>
            <input
              id="booking-name"
              data-ocid="booking.name_input"
              type="text"
              placeholder="أدخلي اسمك"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-background border border-border rounded-xl px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-smooth text-right"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="booking-phone"
              className="font-display text-sm font-semibold text-foreground block"
            >
              رقم الهاتف
            </label>
            <input
              id="booking-phone"
              data-ocid="booking.phone_input"
              type="tel"
              placeholder="01xxxxxxxxx"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full bg-background border border-border rounded-xl px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-smooth text-right"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="booking-service"
              className="font-display text-sm font-semibold text-foreground block"
            >
              اختاري الخدمة
            </label>
            <select
              id="booking-service"
              data-ocid="booking.service_select"
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full bg-background border border-border rounded-xl px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-smooth text-right appearance-none"
            >
              <option value="">-- اختاري الخدمة --</option>
              {allServices.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="booking-date"
              className="font-display text-sm font-semibold text-foreground block"
            >
              اليوم المناسب
            </label>
            <input
              id="booking-date"
              data-ocid="booking.date_input"
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="w-full bg-background border border-border rounded-xl px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-smooth text-right"
            />
          </div>
        </div>

        <button
          data-ocid="booking.whatsapp_submit_button"
          type="button"
          onClick={handleWhatsApp}
          disabled={!isReady}
          className="w-full mt-6 py-4 rounded-2xl font-display font-bold text-base flex items-center justify-center gap-3 transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            background: isReady
              ? "linear-gradient(135deg, #25D366, #1ebe5d)"
              : "oklch(0.88 0.01 78)",
            color: isReady ? "white" : "oklch(0.55 0.03 32)",
          }}
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <title>واتساب</title>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          احجزي عبر واتساب
        </button>

        {!isReady && (
          <p className="text-center text-xs text-muted-foreground mt-3">
            يرجى تعبئة جميع الحقول للمتابعة
          </p>
        )}
      </div>
    </Layout>
  );
}
