# Bush Mini App — Premium Telegram Mini App

Static Netlify package for the Bush Telegram Mini App.

**Backend:** `https://bush-backend-at9f.onrender.com`

---

## 🎨 Design System

**Theme:** Dark Neon Blue (Glassmorphism)

- **Background:** Deep navy-black (`#050510`)
- **Neon accent:** Cyan (`#00D4FF`) — used for borders and glow
- **Numbers (Balance):** Gold gradient (`#FFD700` → `#FFA500`)
- **Text:** White (`#FFFFFF`) for primary, muted gray (`#A0A0A0`) for secondary

**Cards:** Glassmorphism style
- Translucent dark background: `rgba(0, 15, 30, 0.4)`
- Blur effect: `backdrop-filter: blur(10px)`
- Rounded corners: `16px`
- Neon border: `1px solid rgba(0, 212, 255, 0.6)`
- Inner + outer glow via `box-shadow`

**Loading Screen:**
- Full-screen tree image (`1000000561.jpg`) as background
- Progress bar at the bottom with neon cyan glow

---

## 📱 Screens & Navigation

### Bottom Navigation (5 items)
| Position | Item | Action |
|----------|------|--------|
| 1 | 🏆 Competition | Opens weekly competition page |
| 2 | ✅ Tasks | Opens tasks page |
| 3 (center) | **BP Orb** (clickable) | Opens **Home page** |
| 4 | 👥 Invite | Opens referrals page |
| 5 | 💸 Withdraw | Opens withdraw page |

The **BP orb** in the center acts as the Home button with a neon glow effect.

### Pages
1. **Home** — opened by BP orb
   - Hero card: Balance (BP + USDT with coin icon), tree image, language globe button
   - 4 rewarded ad provider cards (see below)
   - Daily bonus with 24-hour countdown
2. **Tasks** — starts with action buttons and 10-second countdown under each task
3. **Invite** — referral link, accepted/pending stats
4. **Withdraw** — USDT cash or PUBG UC
5. **Competition** — weekly winner card + top 50 leaderboard + your rank

---

## 🎬 Rewarded Ad Providers (4 total)

All ads are grouped in the **Home page**, each in its own glass card with:
- Provider name + type badge
- Watch button
- Separate 3/6/10 video bonuses **inside the same card**

| Provider | Type | Status |
|----------|------|--------|
| **Adsgram** | Rewarded Video | ⚠️ Waiting for Block ID from AdsGram |
| **OnClickA** | Rewarded Video | ✅ Ready (Spot ID: `6146212`) |
| **RichAds 1** | Rewarded Video | ✅ Ready (`pubId: 1007361`, `appId: 8749`) |
| **RichAds 2** | Interstitial | ✅ Ready (`pubId: 1007361`, `appId: 8749`) |

### Ad Session Flow (Backend Security)
Each ad click triggers:
1. `POST /api/ads/{provider}/start-session` → returns `session_id`
2. SDK shows the ad
3. `POST /api/ads/{provider}/complete-session` with `session_id` → grants reward

This prevents fraud and double-claiming.

---

## 🌍 Languages (6 supported)

- Arabic (ar) — RTL
- English (en)
- Russian (ru)
- Spanish (es)
- Chinese (zh)
- Indonesian (id)

**Auto-detection:** The language is detected from `Telegram.WebApp.initDataUnsafe.user.language_code` at first launch.
**Manual change:** Via the globe button on the Home page.
**Persistence:** Saved in `localStorage` and in the backend (`users.language` column).

---

## 🏆 Weekly Competition

- **Winner card:** Displays last week's winner (name, prize, week range) for one week until replaced.
- **Leaderboard:** Top 50 players with rank, name, and points.
- **Your rank:** Highlighted in the list.
- **Prize distribution:** Automated every Saturday at 00:05 UTC. Winner receives BP directly into their balance.

---

## 🎁 Rewarded Ads (Frontend SDKs)

### RichAds SDK
```html
<script src="https://richinfo.co/richpartners/telegram/js/tg-ob.js"></script>