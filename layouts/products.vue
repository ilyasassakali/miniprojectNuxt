<template>
    <div>
        <header>
            <nav>
                <li> <NuxtLink to="/products">achetez votre merch sur sbr sobrieté</NuxtLink> </li>

            </nav>
        </header>

<!--output the page content-->
        <div>
            <slot/>
        </div>

        <footer>
            <ul>
                    <li> <NuxtLink to="/">Home</NuxtLink> </li>
                    <li> <NuxtLink to="/about">About</NuxtLink> </li>
                    <li> <NuxtLink to="/products">Products</NuxtLink> </li>
                </ul>
        </footer>
    
    </div>
</template>

<style scoped>
.router-link-exact-active{
    color: red;
}

</style>