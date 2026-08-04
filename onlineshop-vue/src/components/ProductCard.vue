<script setup>
defineProps([
    'nama',
    'harga',
    'gambar'
])
</script>
<template>
    <div class="card">
        <img :src="gambar" :alt="nama" />
        <h2>{{ nama }}</h2>
        <p>Harga: Rp {{ harga.toLocaleString('id-ID') }}</p>
        <button class="grid">Beli</button>
    </div>
</template>
<style scoped>
.card {
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 14px;
    text-align: center;
    width: 200px;
}
.card img {
    width: 100%;
    margin-bottom: 150px;

    border-radius: 6px;
}
.grid {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 70px;
}   
</style>