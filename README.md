# HopeCloud

A modern, responsive charity platform concept built for an AI hackathon — connecting people who need help with people who want to help.

## Stack

- React 18 + Vite
- Tailwind CSS (custom design tokens in `tailwind.config.js`)
- lucide-react icons
- No animation library — scroll reveals use `IntersectionObserver` (`src/hooks/useReveal.js`), counters use `requestAnimationFrame` (`src/hooks/useCountUp.js`)

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/
    ui/              reusable primitives (Toast, Reveal, ConstellationCloud)
    Navbar.jsx        Hero.jsx           ImpactStats.jsx
    HowItWorks.jsx    Causes.jsx         CampaignCard.jsx
    FeaturedCampaign.jsx  AIMatching.jsx  ImpactDashboard.jsx
    Stories.jsx       VolunteerSection.jsx  EmergencySupport.jsx
    Footer.jsx
  data/
    mockData.js       all placeholder content in one place
  hooks/
    useReveal.js      useCountUp.js
  App.jsx
  main.jsx
  index.css
```

## Wiring up the real backend

Every dynamic number, card, and list is pulled from `src/data/mockData.js`. To connect a real backend:

1. Replace each exported array/object in `mockData.js` with a `fetch`/React Query call to your API (e.g. `GET /api/stats`, `GET /api/causes`, `GET /api/campaigns/featured`).
2. The `Donate`, `Support this cause`, `Support Now`, and `Support This Cause` buttons currently show a toast — swap the `showToast(...)` calls in `Navbar.jsx`, `CampaignCard.jsx`, `FeaturedCampaign.jsx`, and `EmergencySupport.jsx` for your payment flow.
3. The `Get Help` button and the "Join the HopeCloud Community" form in `VolunteerSection.jsx` are ready to be pointed at real submission endpoints — the email format validation already runs client-side.
4. The `AIMatching` section is presentational; connect it to your actual matching/recommendation service by replacing `aiExamples`/`aiFlow` with live output.

## Accessibility notes

- All interactive elements are keyboard reachable with a visible focus ring (`:focus-visible` in `index.css`).
- `prefers-reduced-motion` disables scroll-reveal transitions and drifting animations.
- Toasts are announced via `aria-live="polite"`.
