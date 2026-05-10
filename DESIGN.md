# Design Brief

## Direction

Queen Care — Premium minimal beauty center app for Arabic RTL users seeking luxury skin and hair treatments in Qatar.

## Tone

Luxe minimalism with refined editorial elegance; quiet luxury through soft palettes, generous spacing, and sophisticated typography.

## Differentiation

Arabic RTL-native design with soft gold accents anchoring premium treatment cards, WhatsApp CTA prominence, and beige-warm backgrounds that convey calm expertise.

## Color Palette

| Token      | OKLCH       | Role                                      |
| ---------- | ----------- | ----------------------------------------- |
| background | 0.93 0.02 78| Warm beige base, luxe neutral foundation |
| foreground | 0.22 0.05 32| Dark text for premium readability         |
| card       | 0.97 0.01 78| Near-white service cards                  |
| primary    | 0.65 0.18 60| Soft gold buttons, accents, CTAs          |
| accent     | 0.72 0.11 302| Soft purple highlights, secondary CTAs   |
| muted      | 0.88 0.01 78| Subtle backgrounds, disabled states       |

## Typography

- Display: Satoshi — luxury geometric sans for headings, brand, large CTAs
- Body: Lora — refined serif for body copy, service descriptions, editorial content
- Mono: JetBrainsMono — functional fallback for forms
- Scale: hero 48px/700, h2 28px/600, h3 20px/600, body 16px/400, label 12px/500

## Elevation & Depth

Minimal shadow hierarchy: card shadow (1px 4px 0.06 opacity) for service cards and modals; luxury shadow (2px 8px 0.08 opacity) for elevated CTAs and hero sections.

## Structural Zones

| Zone    | Background    | Border            | Notes                                           |
| ------- | ------------- | ----------------- | ----------------------------------------------- |
| Header  | beige/primary | subtle line       | Minimal branding, transparent on scroll         |
| Content | beige         | none              | Card-based layout with alternating padding      |
| Footer  | muted/30      | soft border-top   | Contact info, WhatsApp link, minimal details    |

## Spacing & Rhythm

Mobile-first grid: 16px base unit, sections separated by 2rem gaps, cards with 1rem internal padding, generous hero breathing room (4rem top/bottom).

## Component Patterns

- Buttons: soft gold (primary), soft purple (secondary), white text; 8px radius; 44px min-tap-height
- Cards: 8px radius, card shadow, beige background, soft gold accent bar or border-left
- Badges: soft purple background, dark text, 4px radius
- Forms: muted borders, 4px radius, focus: primary ring

## Motion

- Entrance: fade-in 0.4s ease-in-out for page transitions, slide-in-right 0.3s for card reveals
- Hover: subtle opacity lift, shadow deepening, smooth 0.2s transitions
- Decorative: minimal; reserved for CTA emphasis and WhatsApp notification pulse

## Constraints

- No full-screen gradients; layer depth through cards and zones only
- RTL text and layout throughout; all Arabic text direction-native
- WhatsApp CTA always visible, prominent, and accessible
- Minimal use of transparency; prefer solid colors over opacity overlays

## Signature Detail

Soft gold vertical accent bar (2px width) on left side of service cards (RTL-adjusted to right side), paired with premium serif typography for high-end beauty center aesthetic.
