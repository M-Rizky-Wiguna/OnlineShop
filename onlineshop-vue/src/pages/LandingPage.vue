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
    <div class="main">
      <h2>Selamat Datang di online shop sekolah</h2>
      <p>belanja produk sekolah dengan mudah dan nyaman</p>
      <RouterLink to="/products" class="btn">Belanja Sekarang</RouterLink>
    </div>
    <video controls width="480" loop>
      <source
        src="/public/mov_bbb.mp4"
        type="video/mp4"
      />
      Browser kamu tidak mendukung pemutaran video.
    </video>
    <section class="card">
    <div v-for="data in CardList" :key="data.id" class="card-list">
      <h2>{{ data.image }}</h2>
      <h3>{{ data.LandingCard }}</h3>
      <p>{{ data.FooterCard }}</p>
    </div>
    </section>
  </main>
</template>
<style scoped>
video {
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
}
</style>
