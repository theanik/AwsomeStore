export const stroge = {
    state : {
        inventory : [],
        cart : []
    },
    getters :{
        getInventory(state){
            return state.inventory
        },
        getCart(state){
            return state.cart
        }
    },
    mutations : {
        setInvetory(state, payload){
            state.inventory = payload
        },
        addToCart(state, payload){
            state.cart.push(payload)
        },
        removeItem(state,payload){
            state.cart.splice(payload,1)
        },
        checkoutCart(state){
            state.cart = []
        }

    }
}