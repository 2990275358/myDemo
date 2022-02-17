export default {
    addCounter(state, payload) {
        payload.count++
    },
    addToCart(state, payload){
        state.cartList.push(payload)
    },
    updatedChecked(state, payload){
        payload.checked = false
    },
    desecletAll(state, payload){
        payload.checked = true
    },
    delArticre(state, payload){
        const newCartList = state.cartList.filter(item => {
            return item.checked == false
        })
        state.cartList = newCartList
    }
}