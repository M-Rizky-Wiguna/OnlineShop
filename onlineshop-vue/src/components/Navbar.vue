<template>
  <div class="navbar">
    <h3>SMK Yadika Soreang -- Online Shop</h3>
  </div>
  <nav class="jarak">
    <RouterLink to="/" class="link">Landing</RouterLink>|
    <RouterLink to="/products" class="link">Products</RouterLink>|
    <RouterLink to="/about" class="link">About</RouterLink>|
    <RouterLink to="/contact" class="link">Contact</RouterLink>
  </nav>

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
}

</style>
