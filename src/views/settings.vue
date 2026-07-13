<template>
  <div class="page-settings">
    <h1>Account Settings</h1>
    <p style="color: var(--text-muted); margin-top: 0.5rem;">Configure telemetry notifications and visual thresholds.</p>

    <div class="card-grid" style="margin-top: 2rem;">
      <div class="card" style="grid-column: span 2;">
        <h2>Visual Validation Settings</h2>
        
        <div style="margin-top: 1.5rem; display: flex; flex-direction: column; gap: 1.25rem;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div>
              <div style="font-weight: 600;">Enable Automatic Stabilization</div>
              <div style="font-size: 0.85rem; color: var(--text-muted);">Mask and blur time-sensitive dynamic page widgets.</div>
            </div>
            <input type="checkbox" checked style="width: 20px; height: 20px; accent-color: var(--accent);">
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border); padding-top: 1.25rem;">
            <div>
              <div style="font-weight: 600;">Pixel Comparison Sensitivity</div>
              <div style="font-size: 0.85rem; color: var(--text-muted);">Set structural deviation tolerance.</div>
            </div>
            <select style="background-color: var(--bg-primary); border: 1px solid var(--border); padding: 0.5rem; color: var(--text-main); border-radius: 4px;">
              <option>Strict (0.1% delta)</option>
              <option selected>Standard (0.5% delta)</option>
              <option>Relaxed (1.0% delta)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SettingsView'
});
</script>
