<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link :to="{path:'/'}" class="navbar-brand">Awsome Store</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form @submit.prevent="search" class="form-inline my-2 my-lg-0">
          <input @onkeyup="search" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="keyword">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
</template>

<script>
import { throws } from 'assert';
import axios from 'axios'
export default {
  data() {
    return{
      keyword : ''
    }
  },
  methods : {
    search(){
      //console.log('sdjfhkj')
        //this.$emit('search', this.keyword)
      var self = this
      axios.get('http://localhost:4000/search/'+this.keyword)
        .then(res=>{
          //console.log(res)
          self.$store.commit('setInvetory', res.data)
        })
    }
  }
}
</script>

<style>

</style>
