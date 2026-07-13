<template>
  <div class="page-contact">
    <h1>Contact Our Integration Team</h1>
    <p style="color: var(--text-muted); margin-top: 0.5rem;">Send specifications audits or reporting logs for analysis.</p>

    <div style="margin-top: 2rem;">
      <form @submit.prevent="submitForm" style="max-width: 500px; margin: 0 auto; background-color: var(--bg-secondary); border: 1px solid var(--border); border-radius: 8px; padding: 2rem;">
        <div style="margin-bottom: 1.25rem;">
          <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Your Name</label>
          <input v-model="name" type="text" placeholder="John Doe" required style="width: 100%; padding: 0.75rem; background-color: var(--bg-primary); border: 1px solid var(--border); border-radius: 4px; color: var(--text-main); outline: none;">
        </div>
        
        <div style="margin-bottom: 1.25rem;">
          <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Email Address</label>
          <input v-model="email" type="email" placeholder="john@example.com" required style="width: 100%; padding: 0.75rem; background-color: var(--bg-primary); border: 1px solid var(--border); border-radius: 4px; color: var(--text-main); outline: none;">
        </div>

        <div style="margin-bottom: 1.25rem;">
          <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Message</label>
          <textarea v-model="message" rows="5" placeholder="Enter message text..." required style="width: 100%; padding: 0.75rem; background-color: var(--bg-primary); border: 1px solid var(--border); border-radius: 4px; color: var(--text-main); outline: none; resize: vertical;"></textarea>
        </div>

        <button type="submit" class="btn-primary" style="width: 100%;">Submit Form</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ContactView',
  setup() {
    const name = ref('');
    const email = ref('');
    const message = ref('');

    const submitForm = () => {
      alert(`Message submitted by ${name.value}!`);
      name.value = '';
      email.value = '';
      message.value = '';
    };

    return {
      name,
      email,
      message,
      submitForm
    };
  }
});
</script>
