<template>
  <div>
    <h1>{{ pageTitle }}</h1>
    <client-only>
      <fetch-data />
    </client-only>
  </div>
</template>
<script setup lang="ts">
const pageTitle = "Data page";
useHead({
  title: pageTitle,
});
</script>
