<template>

 <div v-if="item" class="row">
     <div class="col-md-6">
         <h3>Details for {{ item.title}}</h3>
         <img :src="item.photo" alt="">
     </div>
     <div class="col-md-6">
         <h4>{{item.title}}</h4>
         <p>{{item.descroptin}}</p>
         <h5>$ {{item.price}}</h5>
         <a @click="addToCart(item)" class="btn btn-primary">Add Cart</a>
     </div>
 </div>
 <h3 v-else>Loadding...</h3>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            item : null
        }
    },
    mounted(){
        this.fetahItemDetails()
    },methods:{
        fetahItemDetails(){
            var self = this
            axios.get('http://localhost:4000/item/'+ this.$route.params.id)
                .then(res=>{
                    self.item = res.data
                })
        },
        addToCart(item){
            this.$store.commit('addToCart',item)
        }
    }
}
</script>

<style>

</style>
