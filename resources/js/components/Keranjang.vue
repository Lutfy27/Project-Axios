<template>
    <div class="card-body" id="batas">
    <h1>Keranjang Belanja 🛒
        <button-form color="green" @emitClick="getData" text="Refresh"/>
    </h1>
    <table class="table">
        <thead>
            <tr>
                <th>Nama Produk</th>
                <th>Qty</th>
                <th>Harga</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item,index) in listdata" :key="index">
                <td v-if="item.status==true">{{ item.nama }}</td>
                <td v-if="item.status==true">{{ item.cart }}</td>
                <td v-if="item.status==true">Rp.{{ item.sum }}</td>
                <td v-if="item.status==true"><button-form color="red" text="Hapus" @emitClick="returnList(1,index,item.harga)"/></td>
            </tr>
        </tbody>
        <thead>
            <tr v-for="(item,index) in listdata" :key="index">
                <th v-if="index==0">Total:</th>
                <th v-if="index==0"></th>
                <th v-if="index==0">Rp.{{ item.total }}</th>
            </tr>
        </thead>
    </table>
    <button-form color="green" text="Checkout" @emitClick="runPopup(listdata[0]['total'])"/>
    </div>
    </template>
    
    <script>
    export default{
        props:{
            listdata:{
                type:Array,
                default:() =>{
                    return[];
                },
            },
            listdata2:{
                type:Array,
                default:() =>{
                    return[];
                },
            }
        },
        methods:{
            getData(){
                this.$emit('emitGet')
            },
            deleteList(a,b,c){
                this.$emit('emitDelete', a,b,c)
            },
            runPopup(a){
                this.$emit('emitPopup', a)
            },
            returnList(a,b,c){
                this.$emit('emitReturn', a,b,c)
            }
        }
    }
    </script>