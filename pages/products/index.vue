<template>
  <p v-if="error">{{ error }}</p>
  <div v-else>
    <h1>Products</h1>
    <ul v-if="data?.products">
      <li v-for="product in data.products" :key="product.id">
        <nuxt-link :to="`/products/${product.id}`">{{ product.title }}</nuxt-link>
      </li>
    </ul>
    <code-block v-if="site.isDev">
      {{ data }}
    </code-block>
  </div>
</template>

<script setup lang="ts">
import { site } from "@/constants/site";
import type { Product } from "@/components/ProductItem.vue";

interface IProductsResp {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

const PRODUCTS_PER_PAGE = 10;
const { data, error } = await useDummyJson<IProductsResp>(`/products?limit=${PRODUCTS_PER_PAGE}`);
</script>

<style scoped>
:deep(.code-block) {
  margin-top: 2rem;
  max-height: 50vh;
}
</style>
