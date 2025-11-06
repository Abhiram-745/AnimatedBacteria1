# Salmonella Educational Website - Design Guidelines

## Design Approach
**Immersive Educational Experience** - This is a GCSE Biology presentation that prioritizes engagement through heavy animation, visual effects, and interactive elements. Draw inspiration from modern educational platforms like Brilliant.org and interactive science museums, with a dark theme to make glowing effects pop.

## Typography System
**Primary Font**: Roboto (all weights: 300, 400, 500, 700, 900)

**Text Hierarchy**:
- Hero Title: Roboto 900, 4xl-6xl, neon glow effect (#00ff88 shadow)
- Section Headers: Roboto 700, 3xl-4xl, gradient or glowing treatment
- Subheaders: Roboto 500, xl-2xl
- Body Text: Roboto 400, base-lg
- Highlights/Key Terms: Roboto 500, glowing underline or pulsing glow
- Interactive Elements: Roboto 700

## Layout & Spacing System
**Spacing Units**: Use Tailwind spacing of 4, 8, 12, 16, 24 (p-4, gap-8, mb-12, py-16, mt-24)

**Section Structure**: Each of the 11 sections should be full-viewport or near-full viewport height, creating distinct "chapters" as users scroll

**Container Strategy**: max-w-7xl for content, full-width for parallax backgrounds

## Animation Strategy

### Parallax Scrolling
- **Background Layer 1**: Deep space/microscopic bacteria field (slowest, 0.3x scroll speed)
- **Background Layer 2**: Floating bacteria cells (medium, 0.5x scroll speed)
- **Background Layer 3**: Foreground bacteria elements (0.7x scroll speed)
- Apply parallax to hero section and transition between sections

### Scroll-Triggered Animations
- **Fade & Slide Up**: Default for text content blocks (50px translate, opacity 0 → 1)
- **Scale In**: For diagrams, charts, icons (scale 0.8 → 1)
- **Stagger Effect**: For lists and grids (100ms delay between items)
- **Draw Animations**: For timeline diagrams and flowcharts (SVG path animation)
- **Glow Pulse**: For key statistics and important facts

### Continuous Animations
- Title text: Subtle pulsing glow (2s cycle)
- Bacteria backgrounds: Slow floating/rotating motion
- Interactive game elements: Hover glow intensification
- World map: Pulsing infection hotspots

## Visual Effects Library

### Glowing Text Effects
- **Neon Glow**: text-shadow with 0 0 10px, 0 0 20px, 0 0 30px in accent color
- **Gradient Text**: Linear gradients (#00ff88 → #00ccff) with background-clip
- **Pulsing Highlight**: Animated box-shadow for key terms
- **Underline Glow**: Glowing animated underline for hover states

### Color Palette
- **Background**: Dark navy/black (#0a0e1a, #050810)
- **Primary Glow**: Electric green (#00ff88)
- **Secondary Glow**: Cyan (#00ccff)
- **Warning**: Orange-red (#ff6b35)
- **Success**: Bright green (#00ff00)
- **Text**: White (#ffffff), Light gray (#e0e0e0)

## Component Library

### 1. Hero Section
- Full viewport (100vh) with multi-layer parallax bacteria background
- Centered animated title with extreme glow effect
- Subtitle with gradient treatment
- Animated "Scroll to Begin ↓" with bouncing arrow and glow pulse
- Floating bacteria particles across screen

### 2-11. Content Sections
Each section includes:
- Section number badge with glow effect
- Large animated header on entry
- Content cards with glass-morphism effect (backdrop-blur, semi-transparent)
- Relevant animated icons/diagrams
- Smooth transitions between sections

### Specific Section Components

**TMV Comparison (Section 2)**: 
- Side-by-side animated comparison table
- Virus vs Bacteria icons with scale-in animation
- Connecting animated lines/arrows

**Pathogen Types (Section 3)**:
- 4-column grid (responsive to 2-col on tablet, 1-col mobile)
- Icon for each type (bacteria, virus, fungi, protist) with hover glow
- Flip card animation on click to reveal details

**Spread Timeline (Section 5)**:
- Horizontal animated flowchart: Farm → Chicken → Kitchen → Plate → Person
- Icons draw in sequence with connecting animated paths
- Glow effect highlights current step

**Symptoms (Section 7)**:
- 2x2 grid of symptom cards
- Each card: pulsing icon + animated description reveal
- Fever, cramps, vomiting, diarrhea with relevant visual icons

**Prevention (Section 8)**:
- Do/Don't split layout
- Animated checkmarks (✓ green glow) and crosses (✗ red glow)
- Icon grid with hover effects (soap, thermometer, fridge)

**Interactive Game (Section 10)**:
- Full-screen game interface with scenario cards
- 3 scenarios with multiple choice buttons
- Animated bacteria character that grows/shrinks based on choices
- Score tracker with glowing numbers
- Victory/defeat screen with particle effects

**Global Impact (Section 11)**:
- Animated world map (SVG) with glowing hotspot markers
- Pulsing infection spread animation
- Statistics counter with counting-up animation
- Map zooms slightly on scroll entry

## Interactive Elements
- **Hover Glossary**: Dotted underline on key terms, tooltip appears with glow border
- **Button States**: Blurred background overlay, glow on hover, ripple on click
- **Navigation**: Fixed floating dots on side showing section progress (glowing active dot)
- **Scroll Progress**: Glowing bar at top of viewport

## Images
**Hero Image**: Microscopic bacteria background - electron microscope imagery of Salmonella bacteria (rod-shaped with flagella), dark background with green/cyan color treatment to match glow effects

**Section Images**: 
- Bacteria close-ups for parallax layers
- Food safety icons (chicken, eggs, thermometer)
- Pathogen type illustrations
- Hygiene practice photos with overlay effects

Large hero image: Yes - multi-layer parallax bacteria microscopy

## Accessibility Notes
- Maintain WCAG contrast despite glow effects (ensure text readable)
- Provide reduced-motion alternative (CSS prefers-reduced-motion)
- Keyboard navigation for game and interactive elements
- Alt text for all scientific diagrams