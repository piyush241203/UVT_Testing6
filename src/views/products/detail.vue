<template>
  <div class="page-product-detail">
    <router-link to="/products" class="back-link">&larr; Back to Catalog</router-link>
    
    <div class="detail-container" style="margin-top: 1.5rem;">
      <div class="card" style="display: grid; grid-template-columns: 1fr; gap: 2rem;">
        <div>
          <h2>Product Details - Advanced Spec Node</h2>
          <p style="color: var(--text-muted); margin-top: 0.5rem;">High-performance telemetry computation node equipped with deep layout verification routines.</p>
          
          <div class="widget metadata-widget">
            <div class="widget-title">Asset Identifiers</div>
            <div style="font-family: monospace; font-size: 0.85rem;">
              <div>SKU Token: SKU-{{ skuId }}</div>
              <div>Node UUID: {{ nodeUuid }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'ProductDetailView',
  setup() {
    const skuId = ref(0);
    const nodeUuid = ref('---------');

    const generateUuid = () => {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    };

    onMounted(() => {
      skuId.value = Math.floor(Math.random() * 900000) + 100000;
      nodeUuid.value = generateUuid();
    });

    return {
      skuId,
      nodeUuid
    };
  }
});
</script>

<style scoped>
.back-link {
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;
}
.back-link:hover {
  text-decoration: underline;
}
.metadata-widget {
  margin-top: 1.5rem;
  color: var(--text-muted);
}
</style>
