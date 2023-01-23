<template>
  <button class="button" :type="props.btnType">
    <slot />
  </button>
</template>

<script setup lang="ts">
interface IButtonProps {
  btnType?: "button" | "submit" | "reset";
}

const props = withDefaults(defineProps<IButtonProps>(), {
  btnType: "button",
});
</script>

<style scoped lang="scss">
.button {
  background-color: var(--color-quinary);
  border: 1px solid var(--color-quinary);
  border-radius: 0.5rem;
  color: var(--color-primary);
  cursor: pointer;
  font-size: 0.8rem;
  min-height: 40px;
  min-width: 40px;
  padding: 0.25rem 0.5rem;
  text-transform: uppercase;

  &:hover {
    background-color: var(--color-quarternary);
    border-color: var(--color-quarternary);
    color: var(--color-secondary);
  }
}
</style>
