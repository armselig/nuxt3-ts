<template>
  <div class="product-item">
    <component :is="heading">{{ product.title }}</component>
    <p>{{ product.description }}</p>
    <base-image class="product-item__image" :src="product.thumbnail" />
  </div>
</template>

<script setup lang="ts">
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

const props = defineProps<{
  headingLevel?: number;
  product: Product;
}>();
const heading = computed(() => {
  const { headingLevel } = props;

  if (headingLevel && headingLevel <= 5) return `h${headingLevel}`;

  return "h2";
});
const { product } = reactive(props);
</script>
