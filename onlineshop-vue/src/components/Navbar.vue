<template>
  <nav
    class="relative flex shadow-md lg:px-8 bg-gradient-to-r from-mist-950 to-mist-900 justify-between items-center h-16 text-white"
  >
    <div class="flex gap-x-3">
      <img
        src="/public/logo.ico"
        alt="Logo"
        class="w-10 h-10 rounded-full"
        onclick="window.location.href = '/'"
      />
    </div>
    <div class="flex h-16 items-center text-white">
    </div>

    <div class="flex gap-x-3 text-lg font-semibold items-center">
      <RouterLink
        to="/"
        class="text-white hover:text-blue-500"
        active-class="text-blue-500"
      >
        Landing
      </RouterLink>

      <RouterLink
        to="/products"
        class="text-white hover:text-blue-500"
        active-class="text-blue-500"
      >
        Products
      </RouterLink>

      <RouterLink
        to="/about"
        class="text-white hover:text-blue-500"
        active-class="text-blue-500"
      >
        About
      </RouterLink>

      <RouterLink
        to="/contact"
        class="text-white hover:text-blue-500"
        active-class="text-blue-500"
      >
        Contact
      </RouterLink>
      <RouterLink
        to="/testimoni"
        class="text-white hover:text-blue-500"
        active-class="text-blue-500"
        >Testimoni</RouterLink
      >
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
