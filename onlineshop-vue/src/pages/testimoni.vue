<script setup>
const hasilTesti = [
  { id: 1, nama: "Abi Reza", membeli: "Produk A",pendapat:"Produk ini sangat bagus dan berkualitas tinggi. Saya sangat puas dengan pembelian saya." },
  { id: 2, nama: "Umi Ladesh", membeli: "Produk B",pendapat:"Pelayanan pelanggan sangat baik dan produknya sesuai dengan harapan." },
  { id: 3, nama: "Mas Anton", membeli: "Produk C",pendapat:"Saya merekomendasikan produk ini kepada teman-teman saya."  },
];
</script>
<template>
  <h2
    class="mb-5 bg-radial-[at_25%_25%] from-white to-zinc-900 to-69% bg-center text-center bg-gradient-to-r from-mist-950 to-mist-800 text-black p-10 text-3xl font-bold"
  >
    Hasil Testimoni
  </h2>
  <div class=" flex justify-center gap-10  p-10 text-white text-center">
    <div v-for="testi in hasilTesti" :key="testi.id " class="bg-gray-800 p-10 rounded-lg shadow-md w-[400px]">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="testimoni"
          class="w-20 h-20 mb-2 text-center rounded-full mx-auto">
      <h3 class="text-xl font-bold">{{ testi.nama }} - {{ testi.membeli }}</h3>
      <p>"{{ testi.pendapat }}"</p>
    </div>
  </div>
</template>
<style scoped></style>
