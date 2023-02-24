<template>
  <div class="container">
    <navbar/>
    <side/> 
    <keranjang-produk :listdata="list" @emitGet="getData" @emitReturn="returnList" @emitPopup="runPopup" @emitDelete="deleteList"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
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
        returnList(a,b,c){
                const payload = {'a':a, 'b':b, 'c':c} 
                this.$store.dispatch('example/returnList', payload)
        },
        runPopup(a){
                if(a!=0){
                if(window.confirm("Total Biaya adalah = Rp."+a+". Konfirmasi Checkout? ")){
                    window.alert("Terimakasih sudah checkout 🤑");
                    this.$router.push({name: "true", query: {name: this.$route.query.name}})
                    location.reload();
                }
                else
                {
                    window.alert("Anda membatalkan Checkout 😭");
                };
                };
                if(a==0){
                    window.alert("Keranjang belanja masih kosong!");
                }
        },
        deleteList(index){
                this.$store.dispatch('example/kurangList', index)
            }
    }  
}
</script>

<style>

</style>