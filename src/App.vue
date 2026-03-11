<template>
  <div id="app-root">
    <header class="app-header">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/gallery">Gallery</RouterLink>
        <RouterLink to="/video">Video</RouterLink>
        <RouterLink to="/stress">Stress</RouterLink>
      </nav>
    </header>
    <main class="app-main">
      <RouterView v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" :key="$route.fullPath" />
        </transition>
      </RouterView>
    </main>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
/* ======================
   Three.js 背景层
====================== */

#three-container {
  position: fixed;
  inset: 0;
  z-index: -1;
}

/* ======================
   Header
====================== */

.app-header {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 20px 40px;
  backdrop-filter: blur(10px);
  z-index: 10;

  nav {
    display: flex;
    gap: 30px;

    a {
      color: white;
      text-decoration: none;
      transition: all 0.3s ease;

      &:hover {
        color: #42b883;
        transform: translateY(-2px);
      }

      &.router-link-active {
        color: #42b883;
      }
    }
  }
}

/* ======================
   Main
====================== */

.app-main {
  min-height: 100vh;
}
</style>