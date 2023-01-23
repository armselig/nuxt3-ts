<template>
  <pre class="code-block">
    <slot />
  </pre>
</template>

<style scoped>
.code-block {
  background-color: #010101;
  color: #fefdfc;
  overflow-x: scroll;
  padding: var(--space-2);
}
</style>
