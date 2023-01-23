<template>
  <div class="use-fetch">
    <form class="use-fetch__form" @submit.prevent="refreshData">
      <base-input
        id="useFetchInput"
        label="Enter ID:"
        type="number"
        min="1"
        :value="inputValue"
        @update:base-input="(newValue) => (inputValue = newValue)"
      />
      <base-button btn-type="submit">Refresh</base-button>
    </form>
    <form class="use-fetch__form" @submit.prevent="refreshData"></form>
    <div v-if="error" class="use-fetch__error">
      <pre>😰 {{ error }}</pre>
    </div>
    <div v-else-if="data" class="use-fetch__success">
      <h2>{{ data.title }}</h2>
      <p>{{ data.description }}</p>
      <div class="images">
        <div v-for="image in data.images" :key="image" class="image-container">
          <img
            v-show="imagesStore.get(image)"
            :src="image"
            class="image"
            @load="imagesStore.set(image, true)"
          />
          <loading-spinner v-show="!imagesStore.get(image)" />
        </div>
      </div>
      <h2>Response</h2>
      <div class="use-fetch__response">
        <code class="code-block"
          >{{ URL }}
          <pre>{{ data }}</pre>
        </code>
      </div>
    </div>
    <p v-else class="use-fetch__failed">🤔 Hmm... That's odd.</p>
  </div>
</template>

<script setup lang="ts">
import { Product } from "@/components/ProductItem.vue";

const inputValue = ref(getRandom1To100());
const imagesStore = reactive(new Map());
const URL = computed(() => `https://dummyjson.com/products/${inputValue.value}`);
const { data, pending, error, refresh } = await useFetch<Product>(URL, {
  pick: ["title", "description", "images"],
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const isLoading = useState("isLoading", () => pending || false);

function getRandom1To100() {
  return Math.floor(Math.random() * 100 + 1);
}

function refreshData() {
  inputValue.value = getRandom1To100();
  refresh();
}
</script>

<style lang="scss" scoped>
.images {
  display: flex;

  .image-container {
    background-color: var(--color-tertiary);
    flex-basis: 100%;
    height: 240px;

    .image {
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
  }
}

.use-fetch {
  &__response {
    background-color: #000;
    color: #fff;
    padding: 1rem;
  }
}

.code-block pre {
  overflow: scroll;
}
</style>
