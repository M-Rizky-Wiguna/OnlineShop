<template>
  <div class="navbar">
    <h3>SMK Yadika Soreang -- Online Shop</h3>
  <nav>
    <RouterLink to="/">Landing</RouterLink>|
    <RouterLink to="/products">Products</RouterLink>|
    <RouterLink to="/about">About</RouterLink>|
    <RouterLink to="/contact">Contact</RouterLink>
  </nav>
</div>

</template>
<script setup></script>
<style scoped>
h3 {
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
</style>
