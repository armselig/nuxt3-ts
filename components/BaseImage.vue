<template>
  <figure class="base-image">
    <picture class="base-image__container" :style="{ height: props.height, width: props.width }">
      <!-- <loading-spinner v-show="!isLoaded" /> -->
      <img :alt="alt" :src="props.src" class="base-image__img" loading="lazy" />
    </picture>
    <figcaption class="base-image__caption">
      <slot />
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
const props = defineProps<{
  alt?: string;
  height?: string;
  src: string;
  width?: string;
}>();

const alt = props.alt || "";
</script>

<style scoped lang="scss">
.base-image {
  &__caption {
    font-size: 0.9rem;
  }

  &__container {
    background-color: var(--color-quarternary);
    display: flex;
  }

  &__img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
}
</style>
