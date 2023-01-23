<template>
  <div>
    <hello-world />
    <base-image src="https://dummyimage.com/1024x1080" height="50vh" width="50vw"
      >Lorem caption.</base-image
    >
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, sapiente amet perferendis
      pariatur beatae eius totam laboriosam sit nobis molestiae maiores alias quas officia minima,
      aperiam voluptates soluta iure voluptatem.
    </p>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Nuxt 3 Template",
});
</script>
