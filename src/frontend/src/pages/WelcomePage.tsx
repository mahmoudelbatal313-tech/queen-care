import { Layout } from "@/components/Layout";
import { useNavigate } from "@tanstack/react-router";

export function WelcomePage() {
  const navigate = useNavigate();

  return (
    <Layout showNav={false}>
      <div
        className="min-h-screen flex flex-col items-center justify-between relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 60% 20%, oklch(0.88 0.05 78 / 0.6) 0%, oklch(0.93 0.02 78) 70%)",
        }}
      >
        {/* Background hero image */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-spa.dim_800x600.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        />

        {/* Decorative circles */}
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-8 py-16 text-center">
          {/* Crown logo */}
          <div className="mb-6 animate-fade-in">
            <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
              <svg
                viewBox="0 0 120 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                aria-label="شعار Queen Care"
              >
                <title>شعار Queen Care</title>
                <path
                  d="M20 80 L20 50 L10 20 L35 45 L60 10 L85 45 L110 20 L100 50 L100 80 Z"
                  fill="oklch(0.65 0.18 60)"
                  opacity="0.9"
                />
                <path
                  d="M18 80 L102 80 L102 85 Q60 92 18 85 Z"
                  fill="oklch(0.65 0.18 60)"
                  opacity="0.7"
                />
                <circle cx="60" cy="10" r="5" fill="oklch(0.72 0.11 302)" />
                <circle cx="10" cy="20" r="4" fill="oklch(0.72 0.11 302)" />
                <circle cx="110" cy="20" r="4" fill="oklch(0.72 0.11 302)" />
              </svg>
            </div>
          </div>

          {/* Brand name */}
          <div className="animate-slide-in-right">
            <h1 className="font-display text-5xl font-bold text-foreground mb-2 tracking-wide">
              كوين كير
            </h1>
            <p className="font-body text-lg text-muted-foreground italic mt-2">
              للعناية بجمالك
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 my-8 w-48">
            <div className="flex-1 h-px bg-primary/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <div className="flex-1 h-px bg-primary/30" />
          </div>

          <p className="font-body text-sm text-muted-foreground max-w-xs leading-relaxed">
            مركز متخصص في العناية بالبشرة والشعر بأحدث التقنيات العالمية
          </p>
        </div>

        {/* CTA */}
        <div className="relative z-10 w-full px-8 pb-12">
          <button
            type="button"
            data-ocid="welcome.explore_button"
            onClick={() => navigate({ to: "/home" })}
            className="w-full py-4 rounded-2xl font-display font-bold text-lg transition-smooth shadow-luxury"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.65 0.18 60), oklch(0.60 0.16 60))",
              color: "oklch(0.97 0.01 78)",
            }}
          >
            استكشفي الخدمات
          </button>
        </div>
      </div>
    </Layout>
  );
}
