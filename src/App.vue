<template>
  <div id="app">
    <!-- <router-link :to="{path:'/hello'}">home</router-link>
    <router-link :to="{path:'/test/1'}">Test 1</router-link>
    <router-link :to="{path:'/test/2'}">Test 2</router-link>
    <router-link :to="{path:'/test/3'}">Test 3</router-link> -->
    <!---->
    <navbar @search="search"></navbar>

    <div class="container mt-3">
      <div class="row">
        <div class="col-md-8">
            <!-- <inventory @newItemAdd="addCartItem" :items="items"></inventory> -->
             <router-view></router-view> 
        </div>
        <div class="col-md-4">
         <cart @removeFromCart="removeItem" :items="cart"></cart>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Cart from './components/Cart'
//import Inventory from './components/Inventory'
import p_data from './data'
import data from './data';
export default {
  components : {
      Navbar,
      Cart,
     // Inventory
  },
  data(){
    return{
      items : [],
      cart : []
    }
  },
  mounted(){
    this.items = p_data
    //console.log(data);
  },
  methods :{
    addCartItem(item){
      this.cart.push(item)
    },
    removeItem(index){
      this.cart.splice(index,1)
    },
    search(keyword){
      this.items = p_data.filter(item=>{
        return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      })
    }
  }
}
</script>


<style>
  img{
    height: 180px;
  }
  .card{
    float: left;
  }
</style>


