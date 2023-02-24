<template>
    <button type="button" class="btn" :class="color" @click="emitClick">{{ text }}</button>
</template>

<script>
export default ({
    props:{
        text:{
            type: String,
            default : ""
        },
        color:{
            type: String,
            default : ""
        },
    },
    methods:{
        emitClick(){
            this.$emit('emitClick')
        }
    }
})
</script>

<style scoped>
.blue{
    background: rgb(19, 101, 224);
    color: white;
}
.red{
    background: rgb(224, 19, 63);
    color: white;
}
.green{
    background: rgb(41, 155, 57);
    color: white;
}

.transparent{
    background: none;
    color: none;
}
.max{
    background: white;
    color:black;
    padding: 1px;
    padding-right: 5px;
    padding-left: 5px;
    border: 1px solid black;
    font-size:x-small
}
</style>