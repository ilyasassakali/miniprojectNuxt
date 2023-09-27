<template>
        <h1 class="text-3xl font-bold mb-4">Products</h1>
    <Suspense>
      <template #default>
        <div class="grid grid-cols-4 gap-4 p-4">
          <div v-for="p in products" :key="p.id" class="bg-white p-4 shadow rounded">
            <NuxtLink :to="`/products/${p.id}`">
              <img :src="p.image" :alt="p.title" class="w-full h-auto mb-2" />
              <div class="text-center">{{ p.title }}</div>
            </NuxtLink>
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
  