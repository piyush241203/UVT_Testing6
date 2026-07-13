<template>
  <div class="page-home">
    <section class="hero-section">
      <h1>⚡ Universal Visual Testing vue-demo</h1>
      <p>Proving Vue 3 + Vite zero-config discovery, AST route mapping, and dynamic stabilization.</p>
    </section>

    <div class="card-grid">
      <!-- Live Clock -->
      <div class="card">
        <h2>Live System Time</h2>
        <p>Testing DSE clock filters.</p>
        <div class="widget">
          <div class="widget-title">Current Clock</div>
          <div class="time-display">{{ timeString }}</div>
        </div>
      </div>

      <!-- Live Counter -->
      <div class="card">
        <h2>Active Transactions</h2>
        <p>Numerical inputs mutate constantly to simulate volatile numbers.</p>
        <div class="widget">
          <div class="widget-title">Cumulative Sum</div>
          <div class="counter-display">{{ counter }}</div>
        </div>
      </div>

      <!-- SVG Spinner -->
      <div class="card">
        <h2>SVG Dynamic State</h2>
        <p>Continuous spinner validation tests.</p>
        <div class="widget spinner-widget">
          <svg class="spinner" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="18" stroke="#1f2937" stroke-width="4" />
            <path d="M20 2 A18 18 0 0 1 38 20" stroke="#3b82f6" stroke-width="4" stroke-linecap="round" />
          </svg>
          <span class="spinner-text">Active Thread</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';

export default defineComponent({
  name: 'HomeView',
  setup() {
    const timeString = ref('--:--:--');
    const counter = ref(0);
    let timeInterval: any;
    let counterInterval: any;

    const updateTime = () => {
      timeString.value = new Date().toLocaleTimeString();
    };

    onMounted(() => {
      updateTime();
      timeInterval = setInterval(updateTime, 1000);

      counterInterval = setInterval(() => {
        counter.value += Math.floor(Math.random() * 8) + 1;
      }, 1000);
    });

    onUnmounted(() => {
      clearInterval(timeInterval);
      clearInterval(counterInterval);
    });

    return {
      timeString,
      counter
    };
  }
});
</script>

<style scoped>
.hero-section {
  text-align: center;
  padding: 3rem 1rem;
  background: linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
  border-bottom: 1px solid var(--border);
  border-radius: 8px;
}
.hero-section h1 {
  font-size: 2.25rem;
  margin-bottom: 0.5rem;
}
.hero-section p {
  color: var(--text-muted);
}
.time-display {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent);
}
.counter-display {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--accent);
}
.spinner-widget {
  display: flex;
  align-items: center;
  gap: 12px;
}
.spinner {
  animation: spin 1s linear infinite;
}
.spinner-text {
  font-size: 0.875rem;
  color: var(--text-muted);
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
