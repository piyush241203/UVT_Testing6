<template>
  <div class="page-profile">
    <h1>Member Profile</h1>
    <p style="color: var(--text-muted); margin-top: 0.5rem;">Managing session tokens and layout configurations.</p>

    <div class="card-grid" style="margin-top: 2rem;">
      <div class="card" style="grid-column: span 2; display: flex; align-items: center; gap: 24px;">
        <img class="avatar" :src="avatarUrl" alt="Avatar">
        <div>
          <h2>{{ userName }}</h2>
          <p>{{ userEmail }}</p>
          <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 4px;">Role: Senior Quality Engineer</div>
        </div>
      </div>

      <div class="card">
        <h2>Session Metadata</h2>
        <div class="widget">
          <div class="widget-title">Dynamic Timestamps</div>
          <div style="font-family: monospace; font-size: 0.8rem; color: var(--text-muted);">
            <div>createdAt: <span style="color: var(--text-main);">{{ createdAt }}</span></div>
            <div>updatedAt: <span style="color: var(--text-main);">{{ updatedAt }}</span></div>
            <div>requestId: <span style="color: var(--accent);">{{ requestId }}</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'ProfileView',
  setup() {
    const userName = ref('Aria Vance');
    const userEmail = ref('aria@example.com');
    const avatarUrl = ref('');
    const createdAt = ref('');
    const updatedAt = ref('');
    const requestId = ref('');

    onMounted(() => {
      const names = ['Aria Vance', 'Logan Reed', 'Sylvia Chen'];
      const chosen = names[Math.floor(Math.random() * names.length)];
      userName.value = chosen;
      userEmail.value = `${chosen.toLowerCase().replace(/\s+/g, '')}@example.com`;
      avatarUrl.value = `https://i.pravatar.cc/150?u=${chosen.toLowerCase().replace(/\s+/g, '-')}`;
      
      createdAt.value = new Date(Date.now() - 3600000 * 24).toISOString(); // 24 hours ago
      updatedAt.value = new Date().toISOString(); // Current timestamp
      requestId.value = 'REQ-' + Math.floor(Math.random() * 900000 + 100000);
    });

    return {
      userName,
      userEmail,
      avatarUrl,
      createdAt,
      updatedAt,
      requestId
    };
  }
});
</script>

<style scoped>
.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid var(--accent);
}
</style>
