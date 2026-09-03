<template>
  <nav
    class="relative flex shadow-md lg:px-8 bg-gradient-to-r from-mist-950 to-mist-900"
    >
    <div class="relative flex h-16 items-center text-white gap-5">
      <h3 class="text-2xl font-bold text-white">KyyShop</h3>
    </div>
      <div class="text-right ml-240 flex gap-x-3 text-lg font-semibold  h-16 items-center text-white">
      <RouterLink to="/" class="link">Landing</RouterLink>
      <RouterLink to="/products" class="link">Products</RouterLink>
      <RouterLink to="/about" class="link">About</RouterLink>
      <RouterLink to="/contact" class="link">Contact</RouterLink>
    </div>
  </nav>
</template>
<script setup></script>
<style scoped>
/* h3 {
  background: linear-gradient(to right, #0011ff, #0f0038);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin-left: 20px;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
}
.jarak{
  text-align: right;
  margin-top: -40px;
  
}
.link{
  text-decoration: none;
  color :rgb(81, 81, 82);
}
.link:hover{
  text-decoration: underline;
  color: blue;
} */
</style>
