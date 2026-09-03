<script setup>
defineProps(['kualitas', 'harga', 'sekolah'])
const CardList = [
  { id: 1,
    image:"✔",
    LandingCard: "Kualitas paling terbaik",
    FooterCard: "Bahan dipilih tim profesional kami"
    
  },
  { id : 2,
    image: "💰",
    LandingCard: "Harga Bersahabat",
    FooterCard: "Harga Bisa Nego"
  },
  { id : 3,
    image: "🏫",
    LandingCard: "Ambil Disekolah",
    FooterCard: "agar tidak meemrlukan ongkir saat pengiriman"
  }
]
</script>
<template>
  <main>
    <div class="bg-[url(/public/p.jpg)] bg-center text-center my-4 mx-91 bg-gradient-to-r from-mist-950 to-mist-800 text-white p-10 rounded-lg text-lg " >
      <h2 class="text-[30px] font-mono">Selamat Datang di online shop sekolah</h2>
      <p>belanja produk sekolah dengan mudah dan nyaman</p>
      <RouterLink to="/products" class="bg-indigo-800 hover:bg-indigo-400 b text-white font-bold py-2 px-4 pt-2 rounded-[10px] mt-4 inline-block">
        Belanja Sekarang
      </RouterLink>
    </div>
    <div class="text-center  shadow-md bg-slate-950 rounded-lg h-[400px]">
        <div v-for="data in CardList" :key="data.id" class="bg-gray-800 rounded-lg p-4  shadow-md text-white hover:bg-gray-700 transition duration-300 mx-99 mt-4">
          <h2>{{ data.image }}</h2>
          <h3>{{ data.LandingCard }}</h3>
          <p>{{ data.FooterCard }}</p>
        </div>

    </div>
  </main>
</template>
<style scoped>
/* video {
  margin-top: 16px;
  border-radius: 10px;
  display: flex;
  margin-left: 270px;
}
.card{
  display: flex;
  justify-content:space-between;

}
.card-list{
  background-color:grey;
  border-radius: 13px;
  padding-bottom: 100px;
  text-align: center;
  padding-left:20px;
  padding-right:20px;
  width: 200px;
} */
</style>
