<template>
<div class="card-body" id="batas">
<h1>Flash Sale 🤹‍♀️ 
<button-form color="green" @emitClick="getData" text="Refresh"/>
</h1>
<table class="table">
    <thead>
        <tr>
            <th>No.</th>
            <th>Nama Produk</th>
            <th>Deskripsi Produk</th>
            <th>Stok</th>
            <th>Harga</th>
            <th colspan="2">Qty</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(item,index) in listdata" :key="index">
            <td v-if="item.stok!=0">{{ index }}</td>
            <td v-if="item.stok!=0">{{ item.nama }}</td>
            <td v-if="item.stok!=0">{{ item.desk }}</td>
            <td style="text-align: center;" v-if="item.stok!=0">{{ item.stok }}</td>
            <td v-if="item.stok!=0">Rp.{{ item.harga }}</td>
            <td style="text-align: center;" v-if="item.stok!=0">{{ item.ct }}</td>
            <td v-if="item.stok!=0" id="lebar"><button-form v-if="item.ct>1" color="max" text="➖" @emitClick="deleteList(index)"/>
            <button-form v-if="item.ct<item.stok" color="max" text="➕" @emitClick="tambahList(index)"/></td>
            <td v-if="item.stok!=0"><button-form color="blue" text="Tambah" @emitClick="kirimList(item.ct,index,item.harga)"/></td>
        </tr>
    </tbody>
</table>
<button-form style="font-size: 25px" color="green" text="🛒" @emitClick="pushClick"/>
</div>
</template>

<script>
export default{
    props:{
        listdata:{
            type:Array,
            default:() =>{
                return[]
            }
        }
    },
    methods:{
        getData(){
            this.$emit('emitGet')
        },
        pushClick(){
            this.$router.push({name: "cart", query: {name: this.$route.query.name}})
        },
        tambahList(index){
            this.$emit('emitTambah', index)
        },
        deleteList(index){
            this.$emit('emitDelete', index)
        },
        kirimList(a,b,c){
            this.$emit('emitKirim', a,b,c)
        }
    }
}
</script>