import axios from "axios";

const getAllData = async (context) => {
    let response = await axios.get("api/getAllData");

    context.commit("UPDATE_DATA", response.data);
}

const tambahList = async (context, payload) => {
    context.commit('ADD_LIST', payload)
}

const kurangList = async (context, payload) => {
    context.commit('MIN_LIST', payload)
}

const kirimList = async (context, payload) => {
    context.commit('SEND_LIST', payload)
}

const returnList = async (context, payload) => {
    context.commit('RETURN_LIST', payload)
}

export default {
    getAllData,
    tambahList,
    kurangList,
    kirimList,
    returnList
}