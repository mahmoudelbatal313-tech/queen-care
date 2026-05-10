import { Layout } from "@/components/Layout";
import { MapPin, MessageCircle, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "201113777031";
const PHONE_NUMBER = "01013005666";

export function ContactPage() {
  return (
    <Layout>
      <div className="bg-card border-b border-border/40 px-5 pt-12 pb-5">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-1 h-6 bg-secondary rounded-full" />
          <p className="font-body text-sm text-muted-foreground">نحن هنا لكِ</p>
        </div>
        <h1 className="font-display text-2xl font-bold text-foreground">
          تواصل معنا
        </h1>
      </div>

      <div className="px-5 py-6 space-y-5">
        {/* Address */}
        <div className="bg-card rounded-2xl p-5 shadow-card border border-border/30">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
              <MapPin size={20} className="text-secondary-foreground" />
            </div>
            <div>
              <p className="font-display text-sm font-semibold text-foreground mb-1">
                العنوان
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                الحوامدية - برج السلام الطبي
                <br />
                الدور الثالث أعلى معامل المدينة
              </p>
            </div>
          </div>
        </div>

        {/* Phone */}
        <div className="bg-card rounded-2xl p-5 shadow-card border border-border/30">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Phone size={20} className="text-primary" />
            </div>
            <div className="flex-1">
              <p className="font-display text-sm font-semibold text-foreground mb-0.5">
                للحجز
              </p>
              <a
                data-ocid="contact.phone_link"
                href={`tel:+2${PHONE_NUMBER}`}
                className="font-body text-base text-primary font-medium"
                dir="ltr"
              >
                {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="bg-card rounded-2xl p-5 shadow-card border border-border/30">
          <div className="flex items-center gap-4">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "rgba(37,211,102,0.12)" }}
            >
              <MessageCircle size={20} style={{ color: "#25D366" }} />
            </div>
            <div className="flex-1">
              <p className="font-display text-sm font-semibold text-foreground mb-0.5">
                واتساب
              </p>
              <a
                data-ocid="contact.whatsapp_link"
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-base font-medium"
                style={{ color: "#25D366" }}
                dir="ltr"
              >
                {WHATSAPP_NUMBER.replace("20", "0")}
              </a>
            </div>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <a
          data-ocid="contact.whatsapp_cta_button"
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("مرحباً، أريد الاستفسار عن خدمات Queen Care")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-4 rounded-2xl font-display font-bold text-base flex items-center justify-center gap-3 transition-smooth"
          style={{
            background: "linear-gradient(135deg, #25D366, #1ebe5d)",
            color: "white",
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
          تواصل عبر واتساب
        </a>

        {/* Hours */}
        <div className="bg-muted/40 rounded-2xl p-5 border border-border/20">
          <h3 className="font-display text-sm font-semibold text-foreground mb-3">
            أوقات العمل
          </h3>
          <div className="space-y-2">
            {[
              { day: "السبت - الخميس", time: "10:00 ص - 9:00 م" },
              { day: "الجمعة", time: "12:00 م - 9:00 م" },
            ].map(({ day, time }) => (
              <div key={day} className="flex items-center justify-between">
                <span className="font-body text-xs text-muted-foreground">
                  {day}
                </span>
                <span className="font-display text-xs font-medium text-foreground">
                  {time}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 text-center">
          <p className="text-xs text-muted-foreground font-body">
            © {new Date().getFullYear()}. Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
