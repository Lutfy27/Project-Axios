<template>
  <nav class="navbar fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div style="background-color: #ECF9FF;" class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <merek/>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link"><button-form color="transparent" style="font-size:17px" text="Flash Sale" @emitClick="pushClick"/></a>
          </li>
          <li class="nav-item">
            <a class="nav-link active"><button-form color="transparent" style="font-size:17px" text="Keranjang Belanja" @emitClick="pushClick2"/></a>
          </li>
          <li class="nav-item">
            <a class="nav-link"><button-form color="transparent" style="font-size:17px" text="Logout" @emitClick="pushClick3"/></a>
          </li>
        </ul>
        <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button-form color="green" text="Cari"/>
        </form>
      </div>
    </div>
  </div>
</nav>
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
      this.$router.push({name: "home"})
    }
}
}
</script>

<style>

</style>