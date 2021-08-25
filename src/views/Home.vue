<template>
  <div v-if=" ! isEditing">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <input type="text" name="search" id="search" class="form-control mt-4 form-control-lg" placeholder="Cari Buku">
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div>
          <button class="btn btn-primary" type="button" @click="isEditing = true">TAMBAH BUKU</button>
        </div>
        <table class="table mt-4">
          <thead>
            <tr>
              <th>NOMOR</th>
              <th>JUDUL</th>
              <th>PENGARANG</th>
              <th>TAHUN</th>
              <th></th>
            </tr>
          </thead>
          <tbody v-if="bookList.length == 0">
            <tr>
              <td colspan="10">
                <h4 class="text-center">TIDAK ADA DATA</h4>
              </td>
            </tr>
          </tbody>

          <tbody v-else>
            <tr v-for="(book, i) in bookList" :key="i">
              <td>{{ i + 1 }}.</td>
              <td>{{ book.buku }}</td>
              <td>{{ book.pengarang }}</td>
              <td>{{ book.tahun }}</td>
              <td>
                <a href="" class="btn btn-info" v-on:click.prevent="editBuku(i)">EDIT</a>
                <a href="" class="btn btn-danger" v-on:click.prevent="hapusBuku(buku.id)">DELETE</a>
              </td>
            </tr>
          </tbody>
        </table>

        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>

  <form method="POST" action="" v-else>
    <div class="form-group row">
      <label for="title" class="col-sm-2 col-form-label">Judul</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="title" name="title" minlength="3" maxlength="120" v-model="buku.buku" placeholder="Judul">
      </div>
    </div>
    <div class="form-group row">
      <label for="author" class="col-sm-2 col-form-label">Pengarang</label>
      <div class="col-sm-8">
        <input type="text" class="form-control" id="author" name="author" minlength="2" maxlength="80" v-model="buku.pengarang" placeholder="Pengarang">
      </div>
    </div>
    <div class="form-group row">
      <label for="year" class="col-sm-2 col-form-label">Tahun</label>
      <div class="col-sm-2">
        <input type="text" v-model="buku.tahun" class="form-control" id="year" name="year" minlength="4" maxlength="4" placeholder="Tahun">
      </div>
    </div>
    <div class="form-group row mt-3">
      <div class="col-sm-4 offset-sm-2">
        <button class="btn btn-primary" type="button" @click="saveBuku()">SIMPAN DATA</button>
        <a href="/book" class="btn btn-secondary" v-on:click.prevent="isEditing = false">BATALKAN</a>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Api from '../services/api'

export default defineComponent({
  name: 'Home',
  data(){
      return{
        api: new Api,
        isEditing: false,
        bookList: [],
        buku: { id: 0, buku: '', pengarang: '', tahun: 2021 }
      }
  },
  methods: {
    editBuku(i: number) {
      const dataYangMauDiambil = this.bookList[i];
      this.buku = dataYangMauDiambil;
      this.isEditing = true;
    },
    async hapusBuku(id: number) {
      // api.el
      // reload data
      const dataYangMauDiambil = this.bookList[i];
      this.buku = dataYangMauDiambil;
      let url = '/book' + '/' + this.buku.id;
      const data = await this.api.deletResource(url);
      this.bookList = await this.api.getResource('/book');

    },
    async saveBuku() {
      try {
        if (this.buku.buku.length == 0) {
          alert('Judul masih kosong');
          return;
        }
        if (this.buku.pengarang.length == 0) {
          alert('Pengarang masih kosong');
          return;
        }
        const data = await this.api.postResource('/book', this.buku, this.buku.id > 0 ? 'PUT' : 'POST');
        this.isEditing = false;
        this.buku = { id: 0, buku: '', pengarang: '', tahun: 2021 }
        this.bookList = await this.api.getResource('/');
      } catch (err) {
        console.log(err);
      }
    }
  },
  async mounted() {
    try {
      this.bookList = await this.api.getResource('/');
    }catch(err){
      console.log(err);
    }
  }
})
</script>
