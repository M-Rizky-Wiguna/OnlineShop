<template>
  <div class="navbar">
    <h2>SMK Yadika Soreang -- Online Shop</h2>
  <nav>
    <RouterLink to="/">Landing</RouterLink>|
    <RouterLink to="/products">Products</RouterLink>|
    <RouterLink to="/about">About</RouterLink>
  </nav>
</div>

</template>
<script setup></script>
<style scoped>
h2 {
  background: linear-gradient(to right, #0011ff, #0f0038);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 24px;
  margin-right: 20px;
  text-align: center;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f9fa;
}
</style>
