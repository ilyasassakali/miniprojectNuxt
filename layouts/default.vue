<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <img class="logo" src="../images/cart.png" alt="">
                <ul class="flex gap-4">
                    <li> <NuxtLink to="/">Home</NuxtLink> </li>
                    <li> <NuxtLink to="/about">About</NuxtLink> </li>
                    <li> <NuxtLink to="/products">Products</NuxtLink> </li>
                </ul>
            </nav>
        </header>

<!--output the page content-->
        <div class="container mx-auto p-4">
            <slot/>
        </div>
    
    </div>
</template>

<style scoped>
.router-link-exact-active{
    color: rgb(129, 255, 140);
}

.logo{
    width: 50px;
}

</style>