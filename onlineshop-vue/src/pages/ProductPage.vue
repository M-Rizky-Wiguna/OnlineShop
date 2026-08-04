<script setup>
import ProductList from "../components/ProductCard.vue";
const DaftarProduk = [
  {
    id: 1,
    nama: "Seragam Sekolah",
    harga: 150000,
    gambar: "https://example.com/seragam.jpg",
  },
  {
    id: 2,
    nama: "Tas Sekolah",
    harga: 80000,
    gambar: "https://example.com/tas-sekolah.jpg",
  },
  {
    id: 3,
    nama: "Sepatu Sekolah",
    harga: 200000,
    gambar: "https://example.com/sepatu-sekolah.jpg",
  },
];
</script>
<template>
  <main>
    <h1>Product Page</h1>
    <div class="grid">
      <ProductList
        v-for="produk in DaftarProduk"
        :key="produk.id"
        :nama="produk.nama"
        :harga ="produk.harga"
        :gambar="produk.gambar"
      />
    </div>
  </main>
</template>
<style scoped>
.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
</style>
