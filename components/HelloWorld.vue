<template>
  <span>{{ helloMsg }}</span>
</template>
<script setup lang="ts">
interface IHelloWorldProps {
  message?: string;
}
const props = withDefaults(defineProps<IHelloWorldProps>(), {
  message: useHelloWorldString().helloWorldString, // get default string from useHelloWorldString.ts
});

const helloMsg = useState<IHelloWorldProps["message"]>("helloMsg", () => props.message);
</script>
