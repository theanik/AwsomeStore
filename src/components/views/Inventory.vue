<template>
        <div v-if="!loadding" class="row">
            <div v-for="(item,index) in items" :key="index" class="card m-1" style="width: 15rem;">
              <router-link tag="div" :to="{path:'/item/'+item.id}">
              <img :src="item.photo" class="card-img-top" alt="">
              </router-link>
              <div class="card-body">
                <h5 class="card-title">{{ item.title}}</h5>
                <p class="card-text">{{item.price}}</p>
                <a @click="addToCart(item)" class="btn btn-primary">Add Cart</a>
              </div>
            </div>
          </div>
          <div v-else><h3>Loadding...</h3></div>
           
            
</template>

<script>
import axios from 'axios'
import { constants } from 'fs';
export default {
    //props : ['items'],
    data(){
      return {
        //items : [],
        loadding:true
      }
    },
    mounted(){
      this.fetchInventory()
    },
    computed:{
      items(){
        return this.$store.getters.getInventory
      }
    },
    methods : {
      addToCart(item){
        //this.$emit('newItemAdd', item)
        this.$store.commit('addToCart', item)
        console.log('ckilc')
      },
      fetchInventory(){
        var self = this
        axios.get('http://localhost:4000/items')
            .then(res=>{
              //console.log(res.data)
              self.$store.commit('setInvetory', res.data)
              //self.items = res.data
              self.loadding = false
            })
      }
    }
}
</script>

<style>

</style>
