<template>
  <h1
    class="text-black bg-radial-[at_25%_25%] from-white to-zinc-900 to-69% bg-center text-center p-10 text-3xl font-bold"
  >
    Hubungi Kami
  </h1>
  <div class="flex justify-between mb-10">
    <div
      class="text-start mt-10 ml-20 bg-gray-800 text-white p-10 shadow-md rounded-lg w-[400px] h-[280px]"
    >
    
      <h2 class="text-xl font-bold">Info Kontak</h2>
        <div v-for="kontak in daftarKontak" :key="kontak.id" class="mt-4">
            <div class="mt-4">
            <p>📍Alamat:</p>
            <p class="ml-10 mb-3">{{ kontak.alamat }}</p>
            <p>📧Email:</p>
            <p class="ml-10 mb-3">{{ kontak.email }}</p>
            <p>📞Telepon:</p> 
            <p class="ml-10">{{ kontak.telepon }}</p>
            </div>
        </div>
    </div>
    <form
      class="bg-gray-800 text-white p-10 rounded-lg shadow-md w-[400px] mt-10 mr-20"
    >
      <h3 class="text-center text-xl font-bold mb-4">Kirim Pesan</h3>
      <div class="mb-4">
        <label for="nama" class="block mb-2">Nama:</label>
        <input
          type="text"
          id="nama"
          name="nama"
          class="w-full p-2 rounded bg-gray-700 text-white"
          required
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block mb-2">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          class="w-full p-2 rounded bg-gray-700 text-white"
          required
        />
      </div>
      <div class="mb-4">
        <label for="pesan" class="block mb-2">Pesan:</label>
        <textarea
          id="pesan"
          name="pesan"
          rows="4"
          class="w-full p-2 rounded bg-gray-700 text-white"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Kirim
      </button>
    </form>
  </div> 
</template>
<script setup>
const daftarKontak = [
  {
    id: 1,
    alamat: "Jl. Contoh No. 123, Kota Contoh",
    email: "axlerrr@gmail.com",
    telepon: "+62 8953 2153 2579"
  }
];
</script>
<style></style>
