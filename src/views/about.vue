<template>
  <div class="page-about">
    <h1>About Our Project</h1>
    <p style="color: var(--text-muted); margin-top: 0.5rem;">Visual regression verification pipeline designed for complex Single Page Applications.</p>

    <div class="card-grid">
      <div class="card" style="grid-column: span 2;">
        <h2>DSE Avatar Testing</h2>
        <p>This widget dynamically displays a random user avatar. DSE should successfully mask the dynamic avatar container.</p>
        <div class="widget user-profile">
          <img class="avatar" :src="avatarUrl" alt="Random User Avatar">
          <div>
            <div class="user-name">{{ userName }}</div>
            <div class="user-role">Frontend Engineer, Core Team</div>
          </div>
        </div>
      </div>

      <div class="card">
        <h2>Relative Timestamps</h2>
        <p>Time-ago dates change constantly. Check stabilization.</p>
        <div class="widget">
          <div class="widget-title">Session Activity</div>
          <div style="font-weight: 600; color: var(--accent);">Logged in: {{ relativeTime }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'AboutView',
  setup() {
    const userName = ref('-- --');
    const avatarUrl = ref('');
    const relativeTime = ref('just now');

    onMounted(() => {
      const names = ['Aria Vance', 'Logan Reed', 'Sylvia Chen'];
      const chosen = names[Math.floor(Math.random() * names.length)];
      userName.value = chosen;
      avatarUrl.value = `https://i.pravatar.cc/150?u=${chosen.toLowerCase().replace(/\s+/g, '-')}`;

      // Update relative time simulator
      setTimeout(() => {
        relativeTime.value = '42 seconds ago';
      }, 500);
    });

    return {
      userName,
      avatarUrl,
      relativeTime
    };
  }
});
</script>

<style scoped>
.user-profile {
  display: flex;
  align-items: center;
  gap: 16px;
}
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid var(--accent);
}
.user-name {
  font-weight: 700;
  font-size: 1.1rem;
}
.user-role {
  color: var(--text-muted);
  font-size: 0.85rem;
}
</style>
