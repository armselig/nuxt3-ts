<template>
  <div>
    <product-item v-if="product" :product="product" :heading-level="1" />
    <nuxt-link to="/products">Go back to list</nuxt-link>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "@/components/ProductItem.vue";

const { id } = useRoute().params;
const { data: product } = await useDummyJson<Product>(`/products/${id}`);

useHead({
  title: product.value?.title || `Product ${id}`,
});
</script>

<style scoped>
:deep(.product-item__image) {
  max-width: 320px;
}
</style>
