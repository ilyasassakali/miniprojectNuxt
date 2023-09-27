<template>
  <div>
    <h1 class="text-3xl font-bold mb-4">Products</h1>

    <div class="mb-4">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search by product name..."
        class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
      />
    </div>

    <Suspense>
      <template #default>
        <div class="grid grid-cols-4 gap-5">
          <div v-for="p in filteredProducts" :key="p.id">
            <ProductCard :product="p" />
          </div>
        </div>
      </template>

      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </div>
</template>

<script>
import { ref, computed } from 'vue';


export default {
  setup() {
    const { data } = useFetch('https://fakestoreapi.com/products');
    const products = ref(data);
    const searchQuery = ref('');

    const filteredProducts = computed(() => {
      return products.value.filter(product => {
        return product.title.toLowerCase().includes(searchQuery.value.toLowerCase());
      });
    });

    return { searchQuery, filteredProducts };
  }
}
</script>

<style scoped>
/* Vos styles ici */
</style>
