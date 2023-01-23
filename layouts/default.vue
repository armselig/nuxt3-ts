<template>
  <div class="layout">
    <loading-spinner v-show="isLoading" size="full-screen" />
    <header class="header">
      <nuxt-loading-indicator />
      <slot name="header">
        <the-header />
      </slot>
    </header>
    <main class="main">
      <slot />
    </main>
    <footer class="footer">
      <slot name="footer">Pfuhter.</slot>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { site } from "@/constants/site";

const isLoading = useState("isLoading");

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${site.title}` : site.title;
  },
});
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.footer,
.header,
.main {
  padding: 1.5rem;
}

.footer,
.header {
  background-color: var(--color-tertiary);
}

.footer {
  font-size: 0.8rem;
}

.main {
  flex-grow: 1;
  height: 100%;
}
</style>
