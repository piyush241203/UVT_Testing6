<template>
  <div class="page-dashboard">
    <h1>Analytic Dashboard</h1>
    <p style="color: var(--text-muted); margin-top: 0.5rem;">Visual representation of system metrics and network transactions.</p>

    <div class="card-grid">
      <!-- Mock Chart (HTML5 Canvas) -->
      <div class="card" style="grid-column: span 2;">
        <h2>Visual Metrics (Canvas Chart)</h2>
        <p>Dynamic drawings rendered at mount time.</p>
        <div class="widget" style="display: flex; justify-content: center; align-items: center; padding: 0.5rem;">
          <canvas id="dashboard-chart" width="400" height="150" style="border: 1px solid var(--border); border-radius: 4px; background-color: var(--bg-primary); width: 100%; max-width: 500px;"></canvas>
        </div>
      </div>

      <!-- Network Polling Info -->
      <div class="card">
        <h2>Telemetry Polls</h2>
        <p>API requests polling values continuously.</p>
        <div class="widget">
          <div class="widget-title">API Polling Stats</div>
          <div style="font-family: monospace; font-size: 0.85rem; color: var(--text-muted);">
            <div>Status: <span style="color: #10b981; font-weight: 600;">ACTIVE</span></div>
            <div>Request: <span style="color: var(--text-main);">{{ pollCount }}</span></div>
            <div>UUID Token: <span style="color: var(--accent); word-break: break-all;">{{ pollUuid }}</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';

export default defineComponent({
  name: 'DashboardView',
  setup() {
    const pollCount = ref(0);
    const pollUuid = ref('---------');
    let pollInterval: any;

    const generateUuid = () => {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    };

    const drawChart = () => {
      const canvas = document.getElementById('dashboard-chart') as HTMLCanvasElement;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Draw background lines
      ctx.strokeStyle = '#1f2937';
      ctx.lineWidth = 1;
      for (let i = 20; i < canvas.height; i += 30) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
      }

      // Draw random bar chart
      const barCount = 10;
      const barWidth = 25;
      const gap = 15;
      const startX = 20;

      ctx.fillStyle = '#3b82f6';
      for (let k = 0; k < barCount; k++) {
        const height = Math.floor(Math.random() * 90) + 20;
        const x = startX + k * (barWidth + gap);
        const y = canvas.height - height - 10;
        ctx.fillRect(x, y, barWidth, height);
      }
    };

    onMounted(() => {
      drawChart();
      
      pollInterval = setInterval(() => {
        pollCount.value++;
        pollUuid.value = generateUuid();
      }, 2000);
    });

    onUnmounted(() => {
      clearInterval(pollInterval);
    });

    return {
      pollCount,
      pollUuid
    };
  }
});
</script>
