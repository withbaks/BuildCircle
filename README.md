# BuildCircle

Community-powered impact platform. Connect verified partners with support requests. Contribute money, skills, resources, or awareness. Full transparency.

## User Types

- **Verified Partners** — Charities, NGOs, community groups. Get verified, browse requests, back and execute projects.
- **Community Members** — Individuals who submit support requests, contribute, and track impact.
- **Public Visitors** — Explore projects and transparency dashboard without an account.

## Contribution Types

- 💰 Donate money (escrow)
- 🧠 Offer skills / time
- 📦 Donate resources
- 📢 Spread awareness

## Trust Infrastructure

- Escrow-controlled funds
- Milestone-based release
- Mandatory updates
- Public transparency dashboard
- Reputation scoring
- Stalled project visibility

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## API Integration

The project is ready for backend integration:

- **`src/lib/api/`** — API client, types, and endpoint constants
- **`src/lib/api/types.ts`** — Shared types (Project, User, Partner, etc.)
- **`src/lib/api/client.ts`** — `api.get()`, `api.post()`, etc. with auth headers
- **`src/lib/api/endpoints.ts`** — Centralized endpoint paths

Set `NEXT_PUBLIC_API_URL` in `.env.local` when your backend is deployed.

## Auth & Protected Routes

- **Auth context** — `src/lib/auth/AuthContext.tsx`
- **Protected routes** — `/contribute/[id]`, `/requests/new` require sign-in
- Login redirects to `returnUrl` query param after successful auth

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
# BuildCircle
