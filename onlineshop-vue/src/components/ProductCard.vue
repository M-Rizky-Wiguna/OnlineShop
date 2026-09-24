<script setup>
import { ref } from "vue";
defineProps(["nama", "harga", "gambar"]);
const gambarDipilih = ref(null);
function bukaPreview(src) {
  gambarDipilih.value = src;
}
function tutupPreview() {
  gambarDipilih.value = null;
}
function tambahKeKeranjang(nama) {
 const suara = new Audio('/audio/notifikasi.mp3')
 suara.play()
 alert(`${nama} ditambahkan ke keranjang!`)
}
function beliProduk(nama) {
  alert(`Anda membeli ${nama}!`);
}
</script>
<template>
  <div class=" text-center rounded-[20px] shadow-md p-4 bg-gray-800 text-white hover:bg-gray-700 transition duration-300 gap-2 w-[200px] h-[300px] mb-4">
    <div class=" w-[200px] ml-2 h-[150px] mb-4 flex cursor-pointer">
      <img :src="gambar" class="rounded-lg" :alt="nama" @click="bukaPreview(gambar)" />
    </div>
    <h3>{{ nama }}</h3>
    <p>Rp {{ harga.toLocaleString("id-ID") }}</p>
    <div class="flex justify-center gap-2 mt-2">
    <button @click="tambahKeKeranjang(nama)" class="text-start  bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded-full">👜</button>
     <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="beliProduk(nama)">Beli</button>
    </div>
  </div>

  <div v-if="gambarDipilih" class="preview-overlay" @click="tutupPreview">
    <img :src="gambarDipilih" class="preview-besar" />
  </div>
</template>
<style scoped>
.preview-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: zoom-out;
}
.preview-besar {
  max-width: 80%;
  max-height: 80%;
  border-radius: 8px;
}
</style>
