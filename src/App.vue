<template>
  <div class="app-layout">
    <header class="navbar">
      <div class="nav-container">
        <router-link to="/" class="logo">⚡ UVT Vue — UI Round 2 🎯</router-link>
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

    <main class="main-content">
      <router-view />
    </main>

    <footer class="footer">
      <p>&copy; 2026 Universal Visual Testing Platform. Vue.js Certification Fixture. (Final Test)</p>
    </footer>
  </div>
</template>

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

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  background-color: var(--bg-primary);
  color: var(--text-main);
}

.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  background-color: var(--bg-secondary);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--accent);
  text-decoration: none;
}

.nav-links a {
  color: var(--text-muted);
  text-decoration: none;
  margin-left: 1.5rem;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-links a:hover,
.nav-links .router-link-active {
  color: var(--accent);
}

.main-content {
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 3rem 2rem;
}

.footer {
  background-color: var(--bg-secondary);
  border-top: 1px solid var(--border);
  padding: 1.5rem;
  text-align: center;
  color: var(--text-muted);
  font-size: 0.875rem;
}

/* Common UI Styles */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.card {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.card h2 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--accent);
}

.card p {
  color: var(--text-muted);
  font-size: 0.95rem;
}

.widget {
  background-color: var(--bg-primary);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 1rem;
  margin-top: 1rem;
}

.widget-title {
  font-size: 0.8rem;
  text-transform: uppercase;
  color: var(--text-muted);
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.btn-primary {
  padding: 0.6rem 1.2rem;
  background-color: var(--accent);
  color: #fff;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-primary:hover {
  background-color: var(--accent-hover);
}
</style>
