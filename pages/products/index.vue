<template>
        <h1 class="text-3xl font-bold mb-4">Products</h1>
    <Suspense>
      <template #default>  
        <div class="grid grid-cols-4 gap-5">
          <div v-for="p in products">
            <ProductCard :product="p"/>
          </div>
        </div>
      </template>
  
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </template>
  
  <script>
  export default {
    setup() {
      const { data: products } = useFetch('https://fakestoreapi.com/products');
      return { products };
    }
  }
  </script>
  
  <style lang="scss" scoped>
  /* Vos styles ici */
  </style>
  