<template>
  <div class="app-layout">
    <header class="navbar">
      <div class="nav-container">
        <div style="display: flex; align-items: center; gap: 12px;">
          <router-link to="/" class="logo">UVT Vue v5.1 Certified</router-link>
          <span class="certified-badge">Certified v5.1</span>
        </div>
        <nav class="nav-links">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/dashboard">Dashboard</router-link>
          <router-link to="/products">Products</router-link>
          <router-link to="/profile">Profile</router-link>
          <router-link to="/settings">Settings</router-link>
          <router-link to="/contact">Contact</router-link>
        </nav>
      </div>
    </header>

    <!-- TCSE: Leaderboard Banner Ad (IAB 728x90) - CSS heuristic: .ad-banner -->
    <div class="ad-banner" aria-label="Advertisement" role="complementary">
      <span class="ad-headline">Exclusive Deal - 50% Off Cloud Storage This Week</span>
      <span class="ad-label">Sponsored</span>
      <button class="ad-cta-btn">Claim Deal</button>
    </div>

    <main class="main-content">
      <router-view />
    </main>

    <footer class="footer">
      <p>2026 Universal Visual Testing Platform - Vue.js - Percy Integrated - TCSE Certified v1</p>
    </footer>

    <!-- TCSE: Cookie Consent Banner - .cookie-banner, #cookie-consent -->
    <div v-if="cookieVisible" id="cookie-consent" class="cookie-banner">
      <p class="cookie-text">We use cookies to personalize your experience and serve relevant ads.</p>
      <div class="cookie-buttons">
        <button class="cookie-accept" @click="cookieVisible = false">Accept All</button>
        <button class="cookie-decline" @click="cookieVisible = false">Decline</button>
      </div>
    </div>

    <!-- TCSE: Chat Widget - .chat-widget, #chat-button -->
    <div class="chat-widget">
      <div v-if="chatOpen" class="chat-panel">
        <div class="chat-header">Vue Support Chat</div>
        <div class="chat-body">Hi! Need help with Vue.js or UVT? Ask us anything!</div>
        <input class="chat-input" placeholder="Type your message..." />
      </div>
      <button id="chat-button" class="chat-toggle-btn" @click="chatOpen = !chatOpen">Chat</button>
    </div>

    <!-- TCSE: Floating Promotion - .floating-ad, .sticky-ad -->
    <div v-if="promoVisible" class="floating-ad sticky-ad" aria-label="Promotional offer">
      <button class="promo-close" @click="promoVisible = false">x</button>
      <div class="promo-title">Vue Pro Plan</div>
      <div class="promo-subtitle">Save 30% - Limited Time</div>
      <button class="promo-cta">Get Offer</button>
    </div>

    <!-- TCSE: Newsletter Popup (delayed) - .newsletter-popup -->
    <div v-if="newsletterVisible" class="newsletter-popup" role="dialog">
      <button class="newsletter-close" @click="newsletterVisible = false">x</button>
      <h3 class="newsletter-title">Vue Insider Tips</h3>
      <p class="newsletter-desc">Get weekly Vue.js tips and exclusive deals in your inbox.</p>
      <input class="newsletter-email" placeholder="your@email.com" />
      <button class="newsletter-submit">Subscribe</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    const cookieVisible = ref(true);
    const chatOpen = ref(false);
    const promoVisible = ref(true);
    const newsletterVisible = ref(false);

    onMounted(() => {
      // Delayed newsletter popup (simulates marketing tool behavior)
      setTimeout(() => {
        newsletterVisible.value = true;
      }, 4000);
    });

    return { cookieVisible, chatOpen, promoVisible, newsletterVisible };
  }
});
</script>

<style>
:root {
  --bg-primary: #0b0f19;
  --bg-secondary: #161d30;
  --text-main: #f3f4f6;
  --text-muted: #9ca3af;
  --accent: #3b82f6;
  --accent-hover: #2563eb;
  --border: #1f2937;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  background-color: var(--bg-primary);
  color: var(--text-main);
}

.app-layout { min-height: 100vh; display: flex; flex-direction: column; }

.navbar { background-color: var(--bg-secondary); border-bottom: 1px solid var(--border); position: sticky; top: 0; z-index: 100; }

.nav-container { max-width: 1200px; margin: 0 auto; padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; }

.logo { font-size: 1.1rem; font-weight: 700; color: var(--accent); text-decoration: none; }

.certified-badge { background: linear-gradient(135deg, #10b981, #059669); color: #fff; border-radius: 20px; padding: 4px 12px; font-size: 12px; font-weight: 700; }

.nav-links a { color: var(--text-muted); text-decoration: none; margin-left: 1.5rem; font-weight: 500; transition: color 0.2s; }
.nav-links a:hover, .nav-links .router-link-active { color: var(--accent); }

/* TCSE: Leaderboard Ad */
.ad-banner {
  max-width: 728px; height: 90px; margin: 12px auto;
  background: linear-gradient(135deg, #f0fdf4, #dcfce7);
  border: 1px solid #86efac; border-radius: 8px;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 20px; gap: 12px;
}
.ad-headline { font-weight: 700; color: #166534; font-size: 14px; }
.ad-label { background: #064e3b; color: #4ade80; font-size: 10px; padding: 3px 8px; border-radius: 12px; white-space: nowrap; }
.ad-cta-btn { padding: 8px 14px; background: #16a34a; color: #fff; border: none; border-radius: 6px; font-weight: 600; cursor: pointer; font-size: 12px; white-space: nowrap; }

.main-content { flex: 1; max-width: 1200px; margin: 0 auto; width: 100%; padding: 3rem 2rem; }

.footer { background-color: var(--bg-secondary); border-top: 1px solid var(--border); padding: 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.875rem; }

/* TCSE: Cookie Banner */
.cookie-banner {
  position: fixed; bottom: 0; left: 0; right: 0;
  background: #1f2937; color: #f9fafb;
  padding: 14px 24px; display: flex; align-items: center;
  justify-content: space-between; z-index: 9999; gap: 16px; flex-wrap: wrap;
}
.cookie-text { margin: 0; font-size: 13px; }
.cookie-buttons { display: flex; gap: 8px; }
.cookie-accept { padding: 7px 14px; background: #10b981; color: #fff; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 12px; }
.cookie-decline { padding: 7px 14px; background: transparent; color: #9ca3af; border: 1px solid #4b5563; border-radius: 6px; cursor: pointer; font-size: 12px; }

/* TCSE: Chat Widget */
.chat-widget { position: fixed; bottom: 80px; right: 20px; z-index: 9998; }
.chat-panel { width: 260px; height: 280px; background: #fff; border-radius: 12px; box-shadow: 0 8px 32px rgba(0,0,0,0.15); padding: 14px; margin-bottom: 8px; display: flex; flex-direction: column; gap: 8px; color: #1f2937; }
.chat-header { font-weight: 700; font-size: 13px; }
.chat-body { flex: 1; background: #f9fafb; border-radius: 8px; padding: 8px; font-size: 12px; color: #6b7280; }
.chat-input { padding: 6px; border: 1px solid #e5e7eb; border-radius: 6px; font-size: 12px; }
.chat-toggle-btn { width: 48px; height: 48px; border-radius: 50%; background: #3b82f6; color: #fff; border: none; font-size: 14px; cursor: pointer; display: block; margin-left: auto; box-shadow: 0 4px 12px rgba(59,130,246,0.4); font-weight: 700; }

/* TCSE: Floating Ad */
.floating-ad {
  position: fixed; bottom: 140px; right: 20px; z-index: 9997;
  background: linear-gradient(135deg, #7c3aed, #5b21b6); color: #fff;
  border-radius: 12px; padding: 12px 16px; width: 190px;
  box-shadow: 0 8px 24px rgba(124,58,237,0.4);
}
.promo-close { position: absolute; top: 6px; right: 8px; background: none; border: none; color: rgba(255,255,255,0.7); font-size: 13px; cursor: pointer; }
.promo-title { font-weight: 800; font-size: 13px; margin-bottom: 4px; }
.promo-subtitle { font-size: 11px; opacity: 0.9; margin-bottom: 8px; }
.promo-cta { width: 100%; padding: 6px; background: #fff; color: #7c3aed; border: none; border-radius: 6px; font-weight: 700; font-size: 11px; cursor: pointer; }

/* TCSE: Newsletter Popup */
.newsletter-popup {
  position: fixed; top: 50%; left: 50%; transform: translate(-50%,-50%);
  background: #fff; border-radius: 16px; padding: 28px; width: 340px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.2); z-index: 10000; color: #1f2937;
}
.newsletter-close { position: absolute; top: 10px; right: 12px; background: none; border: none; font-size: 18px; cursor: pointer; color: #9ca3af; }
.newsletter-title { margin: 0 0 8px; font-size: 20px; font-weight: 800; }
.newsletter-desc { margin: 0 0 14px; color: #6b7280; font-size: 13px; }
.newsletter-email { width: 100%; padding: 9px 12px; border: 1px solid #e5e7eb; border-radius: 7px; font-size: 13px; margin-bottom: 10px; box-sizing: border-box; }
.newsletter-submit { width: 100%; padding: 10px; background: #3b82f6; color: #fff; border: none; border-radius: 8px; font-weight: 700; cursor: pointer; font-size: 14px; }

/* Common UI Styles */
.card-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-top: 2rem; }
.card { background-color: var(--bg-secondary); border: 1px solid var(--border); border-radius: 8px; padding: 1.5rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
.card h2 { font-size: 1.25rem; margin-bottom: 0.5rem; color: var(--accent); }
.card p { color: var(--text-muted); font-size: 0.95rem; }
.widget { background-color: var(--bg-primary); border: 1px solid var(--border); border-radius: 6px; padding: 1rem; margin-top: 1rem; }
.widget-title { font-size: 0.8rem; text-transform: uppercase; color: var(--text-muted); font-weight: 600; margin-bottom: 0.5rem; }
.btn-primary { padding: 0.6rem 1.2rem; background-color: var(--accent); color: #fff; border: none; border-radius: 4px; font-weight: 600; cursor: pointer; transition: background-color 0.2s; }
.btn-primary:hover { background-color: var(--accent-hover); }
</style>
