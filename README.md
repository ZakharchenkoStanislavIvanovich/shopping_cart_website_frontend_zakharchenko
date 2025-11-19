### Shopping App Frontend

Frontend for a scalable full‑stack shopping application built with Next.js (App Router), React Server Components, Tailwind CSS and Material UI. Implements secure server actions, image uploads, Stripe checkout integration, client and server caching strategies, and production deployment on Vercel.

Author: Stanislav Zakharchenko

---

### Technologies

- **Framework:** Next.js (App directory, Server Components, Server Actions)  
- **UI:** React, Material UI, Tailwind CSS  
- **State & Data fetching:** Next.js fetch with caching, React Context for ephemeral UI state  
- **Authentication:** JWT via secure HttpOnly cookies and server actions  
- **Payments:** Stripe (client + server integration, webhooks handled by backend)  
- **File uploads:** Direct-to-server and presigned S3 uploads (UI flows)  
- **Realtime:** WebSocket client for receiving product/order events  
- **Deployment:** Vercel (production), optional static export for edge CDN

---

### Project structure

```
app/
├── layout.tsx
├── page.tsx
├── dashboard/
├── products/
│   ├── [id]/page.tsx
│   ├── create/
│   └── components/
├── api/
│   ├── auth/       # server actions for login/logout
│   ├── upload/     # endpoints for presigned URLs or direct uploads
│   └── stripe/     # client-safe stripe routes
components/
├── ui/             # reusable MUI+Tailwind components
├── form/           # validated forms with react-hook-form
hooks/
├── useCart.ts
├── useAuth.ts
lib/
├── fetcher.ts      # Next.js fetch wrappers with caching options
├── stripe.ts
styles/
public/
```

---

### Security and best practices

- **Authentication:** Use server actions to set HttpOnly, Secure cookies for JWTs; avoid storing tokens in localStorage.  
- **CSR vs SSR:** Use Server Components for data that doesn’t require client interactivity; isolate interactive logic in Client Components.  
- **Input validation:** Validate forms client-side and rely on backend DTO validation for authoritative checks.  
- **File uploads:** Validate file MIME type and size client-side; prefer presigned S3 uploads for large files.  
- **CSP and headers:** Configure Content Security Policy and secure headers via Vercel or proxy.  
- **Secrets:** Store Stripe publishable key in Vercel env; use backend for secret operations.

---

### Local setup

1. Clone and install
```bash
git clone https://github.com/<your-username>/shopping-app-frontend.git
cd shopping-app-frontend
npm install
```

2. Environment
```bash
cp .env.example .env.local
# Set at minimum:
# NEXT_PUBLIC_API_URL=http://localhost:3001
# NEXT_PUBLIC_STRIPE_PK=pk_live_or_pk_test
# NEXTAUTH_URL=http://localhost:3000
```

3. Run dev server
```bash
npm run dev
# open http://localhost:3000
```

4. Build and preview
```bash
npm run build
npm run start
```

---

### Integrations & deployment

- **API integration:** Communicate with backend API over HTTPS; use Next.js server actions and fetch with revalidate options to control cache and avoid duplicate requests.  
- **Stripe:** Create checkout sessions server-side; use client to redirect to Stripe Checkout or handle Payment Element flows; verify payment status via backend webhooks.  
- **Uploads:** Use server endpoint to request presigned S3 URLs, then upload directly from the browser; update product records via server action after successful upload.  
- **Realtime:** Connect to backend WebSocket gateway using JWT from HttpOnly cookie; handle reconnection and event deduplication in client.  
- **Deployment:** Deploy to Vercel; add environment variables in Vercel dashboard, set up Preview and Production branches, enable automatic deploys on push. Configure redirects and rewrite rules for API proxying if needed.

---

### Useful scripts

- **Dev:** npm run dev  
- **Build:** npm run build  
- **Start (preview):** npm run start  
- **Lint:** npm run lint  
- **Format:** npm run format  
- **Test:** npm run test

---

### Contact

Open issues or pull requests on this repository. For direct questions, contact Stanislav Zakharchenko via the repository profile email.
