<template>
  <div class="base-input">
    <label v-if="label" class="base-input__label" :for="id">{{ label }}</label>
    <input :id="id" v-model="inputValue" class="base-input__field" :type="type" />
  </div>
</template>

<script setup lang="ts">
interface IBaseInputProps {
  id: string;
  label?: string;
  type?: string;
  value: number | string;
}

const emit = defineEmits(["update:base-input"]);
const props = withDefaults(defineProps<IBaseInputProps>(), {
  label: "",
  type: "text",
});

const inputValue = computed({
  get: () => props.value,
  set: (newValue) => emit("update:base-input", newValue),
});
</script>

<style scoped lang="scss">
.base-input {
  display: flex;
  flex-wrap: wrap;

  &__field {
    flex-grow: 1;
  }
}
</style>
