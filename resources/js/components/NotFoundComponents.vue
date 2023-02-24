<template>
    <div class="card fat text-center">
        <h1>404 Not Found</h1>
        <h3>ehh {{this.$route.query.name }}, sepertinya kamu tersesat. yuk balik 😆</h3>
        <h1 @click="goBack"><button-form color="red" text="Back"/></h1>
    </div>
</template>

<script>
export default {
    methods: {
        goBack(){
            this.$router.go(-1)
        }
    }
}
</script>