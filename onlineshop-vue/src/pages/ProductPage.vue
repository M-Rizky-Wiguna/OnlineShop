<script setup>
import ProductList from "../components/ProductCard.vue";
const DaftarProduk = [
  {
    id: 1,
    nama: "Seragam Sekolah",
    harga: 150000,
    gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT-tLGD3iCt5DFvMZ1Z-T91wyzt0q3E-Eivkrs17fusQ&s",
  },
  {
    id: 2,
    nama: "baju sekolah",
    harga: 80000,
    gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXet1IWiMaRZgr6A5j6w4Uz4YXKvPM4yHRDmMMXc-w9A&s=10",
  },
  {
    id: 3,
    nama: "Sepatu Sekolah",
    harga: 200000,
    gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvgqZfA8v--BPEMarT7Mr73-n2mO6D-o2_-Vb9H9u5cw&s=10",
  },
  {
    id: 4,
    nama: "Buku Pelajaran",
    harga: 50000,
    gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl5BIDh-FzZyxGQr-2h_xtp8NZ7X8Cf-hIlokCeJ_w7A&s=10",
  },
  {
    id: 5,
    nama: "Pensil",
    harga: 5000,
    gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBKNVptU7X57WWbu6RAheyunc31SKJQkxs9yP6DnE_lg&s=10",
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
h1{
  text-align:center;
  background: linear-gradient(to right, #0084ff, #000438);
  color: white;
  padding: 30px;
}
</style>
