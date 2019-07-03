<template>
      <ul v-if="items.length > 0" class="list-group">
            <li class="list-group-item">
                <span>Name</span>
                <span class="float-right">Price</span>
            </li>
            <hr>
            <li v-for="(item,index) in items" :key="index" class="list-group-item">
              <span><button @click="removeItem(index)" class="btn btn-sm btn-danger">-</button></span>
              <span>{{item.title}}</span>
                <span class="float-right">{{item.price}}</span>
            </li>
            <hr>
            <li class="list-group-item">
              <span>Total</span>
                <span class="float-right">${{ totalprice }}</span>
            </li>
            <li class="list-group-item">
              <button @click="checkout" class="btn btn-success">Checkout</button>
            </li>
           
      </ul>
      <ul v-else class="list-group">
          <li class="list-group-item">
            <span>Your Cart is Empty 🙃</span>
          </li>
      </ul>
</template>

<script>
export default {
    //props : ['items'],
    computed : {
      items(){
        return this.$store.getters.getCart
      },
      totalprice (){
        var total = 0
        this.items.forEach(item => {
          total += item.price
        })
        return total.toFixed(2);
      }
    },
    methods :{
      removeItem(index){
        this.$store.commit('removeItem',index)
        //this.$emit('removeFromCart', index)
      },
      checkout(){
        this.$store.commit('checkoutCart')
      }
    }
}
</script>

<style>

</style>
