<template>
    <div class="card text-center">
        <img :src="product.image" alt="" class="thumb">
        <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
        <NuxtLink :to="`/products/${product.id}`">
            <p class="bg-green-500 hover:bg-green-300 text-white py-2 px-3 rounded  cursor-pointer">Details</p>

         </NuxtLink>
    </div>
</template>

<script setup>
    const {product} = defineProps(['product'])
</script>

<style  scoped>
.thumb{
    max-width: 70%;
    max-height: 120px;
    margin: 0 auto;
}


</style>