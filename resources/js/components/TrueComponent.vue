<template>
  <div class="container">
    <navbar/>
    <side/> 
    <semua-produk :listdata="list" @emitGet="getData" @emitKirim="kirimList" @emitTambah="tambahList" @emitDelete="deleteList"/>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
    export default{
        data(){
            return{
            };
        },
        computed: {
            ...mapGetters({
                list :'example/getData'
            })
        },
        methods:{
            getData(){
                this.$store.dispatch("example/getAllData")
            },
            tambahList(index){
                this.$store.dispatch("example/tambahList", index)
                // let z = this.list[index]
                // z['ct']+=1
            },
            deleteList(index){
                this.$store.dispatch("example/kurangList", index)
                // let z = this.list[index]
                // z['ct']-=1
            },
            kirimList(a,b,c){ 
                const payload = {'a':a, 'b':b, 'c':c} 
                this.$store.dispatch("example/kirimList", payload)
                // let z = this.list[b]
                // let y = this.list2[0]
                // z['status']=true
                // z['stok']-=a
                // z['cart']+=a
                // z['ct']=1
                // z['sum']=z['sum']+(c*a)
                // y['total']=y['total']+(c*a)
            }
        }
    }
</script>