# Ai EARNERS

## 1. Project Description
Ai EARNERS is a platform where users purchase AI robots that generate daily passive income. The website showcases the platform's features, earnings dashboard preview, member portal access, payment methods, support, and a robot marketplace. Target users are individuals looking for automated income streams through AI technology.

## 2. Page Structure
- `/` - Home (single-page landing with 6 sections)
  - Hero (Home)
  - Key Features
  - Earnings Dashboard
  - Member Portal
  - Payment & Support
  - Robot Marketplace
  - Testimonials, FAQ, CTA
- `/sign-up` - Create Account (form with validation)
- `/login` - Sign In (form with validation)
- `/robot/:id` - Robot Detail Page (dynamic)
- `/checkout/:id` - Robot Checkout Page
- `/how-it-works` - Step-by-step guide for new users
- `/dashboard` - Member dashboard with stats, charts, fleet, withdrawals
- `/dashboard/settings` - Member profile & settings page
- `/earnings` - Earnings detail with per-robot breakdown and CSV export
- `/referral` - Referral program with link, tiers, and history
- `/my-referrals` - My referral tracking dashboard with bonus earnings
- `/leaderboard` - Top earners leaderboard with podium and rankings
- `/affiliate` - Affiliate/partner hub with payout tiers and marketing assets
- `/activity` - Live community activity feed
- `/community` - In-app messaging and group chat
- `/admin` - Admin panel with all features in one lite page (tabs)
- `/member/:handle` - Public member profile with stats and robot fleet
- `/contact` - Contact/Support ticket page
- `/kyc` - KYC / Identity Verification wizard

## 3. Core Features
- [x] Hero section with prominent sign-up CTA
- [x] Key Features section highlighting AI robot capabilities
- [x] Earnings Dashboard preview with charts and stats
- [x] Member Portal section showcasing account/dashboard features
- [x] Payment & Support section with methods and help options
- [x] Robot Marketplace section displaying robot products for purchase
- [x] Responsive navigation with scroll behavior
- [x] Animated elements and scroll reveals
- [x] Sign-up page with form validation (coupon required)
- [x] Login page with form validation
- [x] Robot Detail page with navigation from marketplace cards
- [x] How It Works page with step-by-step onboarding guide
- [x] Dashboard Settings page for profile, password, and withdrawal preferences
- [x] Admin Panel for managing user activity and platform stats
- [x] Member Dashboard with stats, charts, fleet, and withdrawal history
- [x] Checkout flow with payment methods and coupon support
- [x] Earnings detail page with per-robot stacked charts and CSV export
- [x] Notifications system with bell dropdown
- [x] Referral program page with link sharing, tier progress, and history table
- [x] Leaderboard with podium and full rankings
- [x] Affiliate/Partner hub with payout tiers and marketing assets
- [x] Live community activity feed with auto-simulated events
- [x] In-app messaging with groups, DMs, and live sending
- [x] Community chat with search/filter sidebar
- [x] Admin announcement broadcaster
- [x] Public member profile pages
- [x] My Referrals dashboard with stats and purchase history
- [x] Coupon auto-apply at checkout
- [x] "Forgot coupon code" helper on signup
- [x] Admin lite single-page with tabs: Overview, Members, Finance, Coupons, Analytics
- [x] Real Supabase transactions tables (deposits, withdrawals, coupons, referrals, platform_settings)
- [x] Real Finance tab wired to pending deposits/withdrawals with confirm/reject/approve/deny
- [x] Reports & CSV export for members, deposits, withdrawals, coupons, all transactions
- [x] Platform Settings tab (min withdrawal, referral rate, robot base price, etc.) with real read/write

## 4. Data Model Design
- `product_categories`, `product_items`, `product_variants`, `product_skus`, `product_custom_fields`, `product_custom_values` - Product catalog
- `order_headers`, `order_items` - Order/purchase data
- `deposits` - User deposit requests (pending/confirmed/rejected)
- `withdrawals` - User withdrawal requests (pending/approved/denied)
- `coupons` - Promo codes with usage tracking
- `referrals` - Referral signup tracking with bonus earned
- `platform_settings` - Site-wide config (min withdrawal, referral rate, robot pricing, etc.)

## 5. Backend / Third-party Integration Plan
- Supabase: Connected for auth, database, and real data
- Shopify: Not connected yet (future phase for robot products)
- Stripe: Not connected yet (future phase for payments)

## 6. Development Phase Plan

### Phase 1: Homepage Landing Page ✅ COMPLETE
- Goal: Build complete single-page landing site with all 6 sections
- Deliverable: Fully styled homepage with Hero, Features, Dashboard preview, Member Portal, Payment & Support, and Robot Marketplace

### Phase 2: Auth Pages & Robot Detail ✅ COMPLETE
- Goal: Add sign-up, login, and robot detail pages with working forms
- Deliverable: SignUp page with form validation, Login page with form validation, Robot Detail page with navigation from marketplace cards

### Phase 3: Dashboard, Guide & Admin ✅ COMPLETE
- Goal: Add How It Works guide, Dashboard Settings page, and Admin Panel
- Deliverable: How It Works page with onboarding steps, Dashboard Settings with profile/withdrawal forms, Admin Panel with user management

### Phase 4: Member Dashboard, Supabase Auth & Contact ✅ COMPLETE
- Goal: Build real member dashboard with earnings charts, robot fleet view, and withdrawal history; connect Supabase for real auth; add contact/support ticket form
- Deliverable: MemberDashboard page with stats, charts, fleet, withdrawals, and withdraw modal; Supabase client singleton and useAuth hook integrated into Login/SignUp; Contact page with support ticket form; Navbar with auth state awareness

### Phase 5: Checkout, Earnings Reports & Notifications ✅ COMPLETE
- Goal: Add robot purchase checkout with Supabase persistence, earnings detail page with CSV export, notifications system with bell dropdown, and coupon on signup
- Deliverable: Checkout page with payment method selection and Supabase purchases table integration; Earnings detail page with per-robot stacked charts and downloadable CSV; Notifications context with bell UI, 6 demo notifications; Coupon/referral code field on signup; Robot detail "Buy Robot" button routes to checkout

### Phase 6 — Community & Social Proof (COMPLETED)

### Phase 7 — Advanced Community & Admin Tools (COMPLETED)

### Phase 8 — Chat, Profiles & Broadcasts ✅ COMPLETE
- **Community chat search/filter** — sidebar search bar and All/Groups/DMs filter tabs
- **Admin announcement broadcaster** — modal on admin page pushes gold system messages to all group chats simultaneously
- **Public member profiles** (`/member/:handle`) — avatar, tier badge, bio, stats grid, owned robot fleet cards with ROI bars, activity summary, and a "Message" button that starts a DM
- **Leaderboard names linked** to member profiles

### Phase 9 — Analytics & KYC Verification ✅ COMPLETE
- **Admin Control Center** (`/admin`) — single lite tabbed page consolidating all admin tools: Overview (stats cards, recent activity, quick actions, announcement broadcaster), Members (searchable/filterable user table with suspend/activate), Finance (deposit confirmation & withdrawal approval with confirm/reject/deny controls), Coupons (coupon generator form + active coupon usage table), Analytics (platform growth area chart, DAU bar chart, revenue breakdown donut, tier distribution pie, earnings distribution bar chart)
- **KYC / Identity Verification** (`/kyc`) — 4-step wizard: Personal Info, Document Upload (passport/ID/license selector with front/back file uploads), Selfie Check (camera capture with tips), Review & Submit with checkbox consent. Success screen with processing timeline and quick links back to dashboard/settings
- **Verification tab** added to Dashboard Settings — explains benefits (higher limits, verified badge, priority support) and links to KYC flow
- **Verified badges** on member profiles — blue "Verified" pill with shield icon appears on profiles where `verified: true`. Mixed across mock dataset

### Phase 10 — Real Transactions & Platform Settings ✅ COMPLETE
- **Real transaction tables** (`deposits`, `withdrawals`, `coupons`, `referrals`, `platform_settings`) created in Supabase with demo data
- **Finance tab wired to Supabase** — loads real pending deposits and withdrawals, confirm/reject/approve/deny actions persist to database
- **Reports tab** — CSV export for members, deposits, withdrawals, coupons, and combined transactions
- **Platform Settings tab** — real read/write from `platform_settings` table with inputs for min withdrawal, referral rate, robot base price, daily earnings multiplier, max robots per user, withdrawal fee, signup bonus, and KYC requirement toggle