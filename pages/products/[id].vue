<template>
    <div class="flex">
      <div class="w-1/2 p-4">
        <img class="productimg" :src="product.image" :alt="product.title" />
      </div>
      <div class="w-1/2 p-4">
        <h2 class="text-2xl font-bold mb-2">{{ product.title }}</h2>
        <p class="text-xl font-semibold mb-2">Price: {{ product.price }} euro</p>
        <p class="text-gray-600">Product ID: {{ product.id }}</p>
        <button class="btn flex bg-green-500 hover:bg-green-300 text-white py-2 px-3 rounded  cursor-pointer">
          <i class="material-icons mr-2 ">add_shopping_cart</i>
          <span>Add to cart</span>
        </button>
        
      </div>
    </div>
  </template> 
  
  <script setup>
    const { id } = useRoute().params;
    const uri = 'https://fakestoreapi.com/products/' + id;
  
    const { data: product } = await useFetch(uri, { key: id });
  
    definePageMeta({
      layout: 'products'
    });
  </script>
  
  <style lang="scss" scoped>
    .productimg {
      max-width: 100%;
      max-height: 300px;
      object-fit: cover;
    }
  </style>
  