<template>
<div>
    <head>
	<meta charset="utf-8">
	<meta name="author" content="Kodinger">
	<meta name="viewport" content="width=device-width,initial-scale=1">
	<title>Shepii Login</title>
</head>
<body class="my-login-page">
	<section class="h-100">
		<div class="container h-100">
			<div class="row justify-content-md-center h-100">
				<div class="card-wrapper">
					<div style="font-size:50px" class="brand text-center">
					 🏪
					</div>
					<div class="card fat">
						<div class="card-body">
							<h3 class="card-title">Login</h3>
							<form method="POST" class="my-login-validation" novalidate="">
								<div class="form-group">
									<label><h5>Hai saya Shepii 👋 nama kamu siapa?</h5></label>
									<input type="text" v-model="dataInput" class="form-control"  value="" required autofocus>
								</div>

								<div class="form-group">
									<br>
								</div>

								<div class="form-group m-0">
									<button-form @emitClick="userClick(dataInput)" color="blue" type="submit" class="btn btn-primary btn-block" text="Login"/>
								</div>
								<div class="mt-4 text-center">
									Amnesia? <router-link to="/zonk?name=cuma bercanda kok">klik disini biar ingat</router-link>
								</div>
							</form>
						</div>
					</div>
					<div class="footer">
						Copyright &copy; 2023 &mdash; Shepii Mall 
					</div>
				</div>
			</div>
		</div>
	</section>
</body>
</div>
</template>
<script>
export default{
    data(){
        return{
            dataInput:""
        }
    },
    methods: {
          userClick(x){
			if(x==""){
				x="anonymous";
				this.$router.push({name: 'true', query: {name: x}})
			}
			else this.$router.push({name: 'true', query: {name: x}})
          }
      }
}
</script>

