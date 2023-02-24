const UPDATE_DATA = (state, payload) => {
    state.data = payload.data
    console.log(payload);
}
const ADD_LIST = (state, payload) => {
    state.data[payload]['ct'] += 1
}
const MIN_LIST = (state, payload) => {
    state.data[payload]['ct'] -= 1
}
const SEND_LIST = (state, payload) => {
    let z = state.data[payload.b]
    let y = state.data[0]
    z['status'] = true
    z['stok'] -= payload.a
    z['cart'] += payload.a
    z['ct'] = 1
    z['sum'] = z['sum'] + (payload.c * payload.a)
    y['total'] = y['total'] + (payload.c * payload.a)
}
const RETURN_LIST = (state, payload) => {
    let z = state.data[payload.b]
    let y = state.data[0]
    if (z['cart'] == 1) {
        z['status'] = false;
    };
    z['stok'] += payload.a
    z['cart'] -= payload.a
    z['sum'] = z['sum'] - (payload.c * payload.a)
    y['total'] = y['total'] - (payload.c * payload.a)
}
export default {
    UPDATE_DATA,
    ADD_LIST,
    MIN_LIST,
    SEND_LIST,
    RETURN_LIST
}