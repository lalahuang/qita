---
name: Serene Sanctuary
colors:
  surface: '#faf9f6'
  surface-dim: '#dbdad7'
  surface-bright: '#faf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f1'
  surface-container: '#efeeeb'
  surface-container-high: '#e9e8e5'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1a'
  on-surface-variant: '#434840'
  inverse-surface: '#2f312f'
  inverse-on-surface: '#f2f1ee'
  outline: '#73796f'
  outline-variant: '#c3c8bd'
  surface-tint: '#496640'
  primary: '#334f2b'
  on-primary: '#ffffff'
  primary-container: '#4a6741'
  on-primary-container: '#c2e4b4'
  inverse-primary: '#afd0a1'
  secondary: '#6e5b43'
  on-secondary: '#ffffff'
  secondary-container: '#f5dcbc'
  on-secondary-container: '#726046'
  tertiary: '#424a42'
  on-tertiary: '#ffffff'
  tertiary-container: '#5a625a'
  on-tertiary-container: '#d5ddd2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#caecbc'
  primary-fixed-dim: '#afd0a1'
  on-primary-fixed: '#062104'
  on-primary-fixed-variant: '#324e2a'
  secondary-fixed: '#f8dfbf'
  secondary-fixed-dim: '#dbc3a4'
  on-secondary-fixed: '#261906'
  on-secondary-fixed-variant: '#55442d'
  tertiary-fixed: '#dde5da'
  tertiary-fixed-dim: '#c1c9be'
  on-tertiary-fixed: '#161d17'
  on-tertiary-fixed-variant: '#414941'
  background: '#faf9f6'
  on-background: '#1a1c1a'
  surface-variant: '#e3e2e0'
typography:
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Noto Serif
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Noto Serif
    fontSize: 20px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-lg:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  label-md:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  margin-page: 24px
  gutter: 16px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

The visual identity of this design system is rooted in the concept of "松弛感" (a sense of relaxation and ease). It is designed to feel like a digital extension of a premium wellness retreat—quiet, intentional, and restorative. The target audience seeks a temporary escape from high-pressure urban environments, valuing quality of life and holistic health over transactional convenience.

The chosen style is **Minimalism with a Tactile touch**. We lean heavily into white space to allow content to breathe, mirroring the airy, natural vibe found in the reference images. By integrating subtle wood-textured accents and soft, organic shadows, the UI avoids a cold "tech" feel, instead evoking the warmth of a luxury wooden spa or a forest pavilion. The interface acts as a silent concierge, prioritizing serenity over stimulation.

## Colors

The palette is derived from a Mediterranean-meets-East-Asian naturalism. 
- **Primary (Forest Moss):** A deep, muted green used for primary actions and key headings. It represents growth and stability.
- **Secondary (Warm Cedar):** A sophisticated earthy tone used for subtle accents and highlights, mimicking wood finishes.
- **Tertiary (Morning Mist):** A very soft, desaturated green for large background containers and subtle UI grounding.
- **Neutral (Warm Alabaster):** We avoid pure white (#FFFFFF) in favor of a warm, slightly cream-tinted off-white to reduce eye strain and feel more organic.

The default mode is strictly **light**. Dark modes are avoided to maintain the "airy and bright" feeling of a sun-drenched resort.

## Typography

This design system employs a classic Serif/Sans-Serif pairing to balance tradition with modernity. 
- **Headlines:** Use *Noto Serif* to convey elegance and the literary feel of a high-end wellness journal. We use generous line heights to ensure the text never feels "tight."
- **Body & Functional Text:** Use *Manrope* for its clean, balanced, and calm character. It provides high legibility for service descriptions and scheduling.
- **Hierarchy:** High emphasis is placed on contrast between large, thin serifs and small, clear sans-serif labels. All-caps is used sparingly for labels to add a touch of "editorial" sophistication.

## Layout & Spacing

The layout philosophy follows a **Fluid Grid with breathing room**. We use a standard 4-column grid for mobile, but the defining characteristic is the "Negative Space Buffer." Elements are never crowded against the edges of the screen.

- **Margins:** A generous 24px side margin ensures content feels centered and precious.
- **Rhythm:** We use a base-4 system but skip values to create dramatic "white space" breaks (e.g., jumping from 24px to 48px) to signify a change in mental context, such as moving from "Booking" to "Atmospheric Content."
- **Verticality:** Long-form scrolling is encouraged, with large full-bleed imagery acting as visual "breathers" between functional blocks.

## Elevation & Depth

To maintain the "Natural" aesthetic, this design system avoids heavy, artificial shadows. Depth is achieved through **Tonal Layers** and **Ambient Diffusion**.

- **Surfaces:** Use color-stacking rather than shadows. A `Neutral` background might host a `Tertiary` color card to show containment.
- **Shadows:** When necessary (e.g., for floating action buttons or primary cards), use extremely diffused shadows: Blur 30px, Y-offset 10px, and a low-opacity (5%) tint of the `Primary` green color instead of pure black. This mimics the soft shadows found in natural forest light.
- **Glassmorphism:** Used very sparingly for top navigation bars to allow the colors of background imagery to bleed through, creating a sense of continuity.

## Shapes

The shape language is **organic and soft**. There are no sharp 90-degree corners in this design system, as they feel too industrial and aggressive.

- **Cards & Containers:** Use a 16px (1rem) radius to feel substantial yet approachable.
- **Interactive Elements:** Buttons utilize a slightly higher roundedness to differentiate them from static cards.
- **Image Containers:** Often feature asymmetrical rounding (e.g., top-left and bottom-right only) to mimic the irregular beauty of nature.

## Components

- **Buttons:** Primary buttons are solid `Primary Green` with white text. Secondary buttons are outlined in `Secondary Wood` or semi-transparent washes. Avoid "pill" shapes for main buttons; stick to `rounded-lg` for a more "architectural" feel.
- **Cards:** Clean layouts with ample internal padding (20px+). Images should always occupy at least 50% of the card area, using high-quality photography of nature or resort interiors.
- **Chips:** Used for filtering wellness categories (e.g., "Yoga," "Meditation"). These should be low-contrast: `Tertiary Green` backgrounds with `Primary Green` text.
- **Minimal Icons:** Use thin-stroke (1px) icons. Avoid filled icons unless active. Icons should be functional metaphors (leaves for "Nature," a simple bowl for "Dining").
- **Inputs:** Simple bottom-border lines or very soft tinted backgrounds. No heavy boxes.
- **Atmospheric Dividers:** Instead of lines, use a 1px height `Secondary Wood` line that fades out at the edges, or simply use extra whitespace.
- **Wellness Calendar:** A custom component with soft circular highlights and a focus on daily "intentions" rather than just time slots.