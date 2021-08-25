<template>
  <p>nama : {{ nama }} nim : {{ nim }}</p>
  <button type="button">Tambah Nama</button><br>
  <input type="text" name="nama" v-model="nama"><br>
  <input type="text" name="" id="" :placeholder="mhsList.lenght" v-model="kataKunci"> {{ kataKunci }}
  <br>
  <ul>
    <li v-for="(mhs, i) in mhsList" :key="i">
      <span :class="mhs.jenisKelamin == 'p' ? 'hijau' : 'merah'">{{ `NOMOR: ${i + 1}` }}. {{ mhs.nama }}
      </span>
    </li>
  </ul>
  <p>
    Mahasiswi: {{ namaMahasiswi}}
  </p>
  <p>Total Bayar: {{ totalBayar}}</p>

    <router-link to="/"> PINDAH KE AWAL</router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Halaman3',
  computed: {
    namaMahasiswi(): string {
      for (let i = 0; i < this.mhsList.length; i++) {
        const mhs = this.mhsList[i];
        if (mhs.jenisKelamin == 'p') {
         return mhs.nama; 
        }
      }
      return '';
    },
    totalBayar(): number{
      let total = 0;
      for (let i = 0; i < this.mhsList.length; i++) {
        const mhs = this.mhsList[i];
      }
      return total;
    }
  },
  data(){
    return{
      count: 5,
      nama: 'Ali Rahman',
      nim: '2019520038',
      katKunci: '',
      mhsList: [{
        nim: '2019520038',
        nama: 'Ali Rahman',
        jenisKelamin: 'l'
      }, {
        nim: '2019520011',
        nama: 'Ulfa',
        jenisKelamin: 'p'
      }]
    }
  },
  methods: {
    naikkanCount(){

    },
    tambahNama(){
      this.mhsList.push({
        nim: '2019520000',
        nama: 'gak tau siapa',
        jenisKelamin: 'p'
      })
    }
  }
})
</script>
<style scoped>
.hijau{
  color: green;
}

</style>
