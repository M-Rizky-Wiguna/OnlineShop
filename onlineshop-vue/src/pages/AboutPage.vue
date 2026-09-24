<script setup>
const daftarkariawan = [
  {
    id: 1,
    nama: "Amba",
    posisi: "CTO",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3SpbZ4UnBOZrb0InNHNlOEr-FSYR0M_N0hFW6pejFC8OGE61gGWZgnug&s=10"
  },
  {
    id: 2,
    nama: "Rizky",
    posisi: "CEO",
    img:""
  },
  {
    id: 3,
    nama: "Rusdi",
    posisi: "CFO",
    img:"https://i.pinimg.com/736x/6c/7b/d0/6c7bd05189c6c6da96fff6705301afa5.jpg"
  }
];
</script>

<template>
  <main>
    <h1
      class="text-black bg-radial-[at_25%_25%] from-white to-zinc-900 to-69% bg-center text-center p-10 text-3xl font-bold"
    >
      Tentang Kami
    </h1>

    <h2 class="cerita text-white text-center mr-200 text-2xl font-bold">
      Cerita Kami
    </h2>

    <div class="container justify-baseline flex">
      <p class="text-lg text-slate-400 ml-4 text-center ml-10 mr-57">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quisquam, voluptatum.
        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quisquam, voluptatum.
      </p>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlqZ3MDbFVYr9es80unlye5bHEQ9nUWhWlS0RJelkM8A&s=10"
        alt="images"
        class="bg-white w-300 h-70 rounded-lg shadow-md mb-10"
      />
    </div>

    <h2
      class="cerita text-white text-center bg-slate-700 p-4 ml-100 mr-100 rounded-lg text-2xl font-bold"
    >
      Tim Kami
    </h2>

    <div class="flex">
      <div
        v-for="karyawan in daftarkariawan"
        :key="karyawan.id"
        class="bg-gray-800 text-white p-10 rounded-lg shadow-md w-[400px] mt-10 ml-20 mb-10 text-center mr-10"
      >
        <img
          :src="karyawan.img"
          :alt="karyawan.nama"
          class="size-18 rounded-full object-cover mx-auto"
        />

        <div class="mt-4">
        </div>

        <p>Nama: {{ karyawan.nama }}</p>
        <p>Posisi: {{ karyawan.posisi }}</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* .content {
  text-align: start;
  font-size: 18px;
  margin-top: 20px;
  margin-left: 50px;
  display: flex;
}
p {
  color: grey;
}
img {
  background-color: bisque;

}
.cerita{
  justify-content: baseline;
  display: flex;
} */
</style>
