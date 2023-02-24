<template>
  <div class="card text-left fixed-top">
    <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <merek/>
      </li>
      <li style="margin-left:20px; margin-top:5px;" class="nav-item">
        <marquee width="500"><h3>Haii {{this.$route.query.name }}  👋  jangan sampai ketinggalan flash sale hari ini yaak 😆</h3></marquee>
      </li>
    </ul>
    </div>
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link"><button-form color="transparent" style="font-size:17px" text="Flash Sale" @emitClick="pushClick"/></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"><button-form color="transparent" style="font-size:17px" text="Keranjang Belanja" @emitClick="pushClick2"/></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"><button-form color="transparent" style="font-size:17px" text="Profil" @emitClick="pushClick3"/></a>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  methods:{
    pushClick(){
        this.$router.push({name: "true", query: {name: this.$route.query.name}})
    },
    pushClick2(){
        this.$router.push({name: "cart", query: {name: this.$route.query.name}})
    },
    pushClick3(){
        this.$router.push({path: "/profil", query: {name: this.$route.query.name}})
    }
  }
}
</script>

<style>

</style>