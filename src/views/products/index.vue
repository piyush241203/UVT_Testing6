<template>
  <div class="page-products">
    <h1>Products Catalog</h1>
    <p style="color: var(--text-muted); margin-top: 0.5rem;">Explore layout structures of dynamically rendered products feeds.</p>

    <!-- Products grid with signed image URLs -->
    <div class="card-grid">
      <div v-for="product in products" :key="product.id" class="card product-card">
        <img class="product-image" :src="product.signedImage" alt="Product Image">
        <h3>{{ product.title }}</h3>
        <p>{{ product.description }}</p>
        <div class="price-row">
          <span class="price">${{ product.price }}</span>
          <router-link to="/products/detail" class="btn-detail">View Details</router-link>
        </div>
      </div>
    </div>

    <!-- Infinite Scroll simulated state -->
    <div class="widget loading-footer" style="text-align: center; margin-top: 3rem;">
      <div v-if="loadingMore" class="loading-indicator">
        <span class="loader-dot"></span>
        <span>Loading additional listings dynamically...</span>
      </div>
      <button v-else @click="loadMore" class="btn-primary">Trigger Infinite Load</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ProductsView',
  setup() {
    const products = ref([
      {
        id: 1,
        title: 'Enterprise Server Node',
        description: 'High throughput node with AST framework parsing built-in.',
        price: '1,200',
        signedImage: `https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&sig=${Date.now()}` // Dynamic signed image token parameter
      },
      {
        id: 2,
        title: 'Visual Core Hub',
        description: 'Dedicated GPU acceleration box for pixel comparisons.',
        price: '450',
        signedImage: `https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&sig=${Date.now()}` // Dynamic signed image token parameter
      }
    ]);

    const loadingMore = ref(false);

    const loadMore = () => {
      loadingMore.value = true;
      setTimeout(() => {
        products.value.push({
          id: products.value.length + 1,
          title: 'Hybrid Cloud Gateway',
          description: 'Secure, low latency API orchestration server.',
          price: '850',
          signedImage: `https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&sig=${Date.now()}`
        });
        loadingMore.value = false;
      }, 1000);
    };

    return {
      products,
      loadingMore,
      loadMore
    };
  }
});
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
}
.product-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 1rem;
  border: 1px solid var(--border);
}
.price-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 1rem;
}
.price {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--accent);
}
.btn-detail {
  padding: 0.4rem 0.8rem;
  background-color: var(--bg-primary);
  border: 1px solid var(--border);
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.875rem;
  transition: border-color 0.2s;
}
.btn-detail:hover {
  border-color: var(--accent);
}
.loader-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--accent);
  margin-right: 8px;
  animation: pulse 1s infinite alternate;
}
@keyframes pulse {
  from { opacity: 0.2; }
  to { opacity: 1; }
}
</style>
