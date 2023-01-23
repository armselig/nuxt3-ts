<template>
  <div>
    <nav>
      <ul>
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/data">Data</nuxt-link></li>
        <li><nuxt-link to="/products">Products</nuxt-link></li>
      </ul>
    </nav>
  </div>
</template>

<style scoped lang="scss">
ul {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding-left: 0;
}

li:not(:last-of-type) {
  padding-right: 2rem;
}
</style>
