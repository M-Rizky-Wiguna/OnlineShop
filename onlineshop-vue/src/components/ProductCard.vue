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
</script>
<template>
  <div class="rounded-[20px] shadow-md p-4 bg-gray-800 text-white hover:bg-gray-700 transition duration-300 gap-2 w-[200px] h-[300px] mb-4">
    <div class=" w-[200px] h-[150px] mb-4 flex rounded-[6px] cursor-pointer">
      <img :src="gambar" :alt="nama" @click="bukaPreview(gambar)" />
    </div>
    <h3>{{ nama }}</h3>
    <p>Rp {{ harga.toLocaleString("id-ID") }}</p>
    <button @click="tambahKeKeranjang(nama)">👜</button>
    <div class="flex justify-center">
     <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="tambahKeKeranjang(nama)">Beli</button>
    </div>
  </div>

  <div v-if="gambarDipilih" class="preview-overlay" @click="tutupPreview">
    <img :src="gambarDipilih" class="preview-besar" />
  </div>
</template>
<style scoped>
/* .card {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 14px;
  width: 200px;
  text-align: center;
}
.card img {
  width: 100%;
  border-radius: 6px;
  cursor: pointer;
}
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
button{
  margin-left: 160px;
  border-radius: 100%;
  font-size: 16px;  
} */
</style>
