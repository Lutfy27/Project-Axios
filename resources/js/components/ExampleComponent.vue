<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <h1 class="text-center mb-3">Contoh Axios</h1>
                <div class="card">
                    <div class="card-header">Contoh Axios</div>
                    <div class="card-body text-center">
                        <input type="text" v-model="inputData" class="form-control mb-2">
                        <button class="mx-1 btn btn-success" @click="getData">GET</button>
                        <button class="mx-1 btn btn-primary" @click="postData">POST</button>
                        <button class="mx-1 btn btn-warning" @click="putData">PUT</button>
                        <button class="mx-1 btn btn-info" @click="patchData">PATCH</button>
                        <button class="mx-1 btn btn-danger" @click="deleteData">DELETE</button>
                    </div>
                </div>
                <div class="card mt-3">
                    <div class="card-header">Data</div>

                    <div class="card-body">
                        <pre>
                            {{ allData }}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            inputData: ""
        }
    },
    mounted() {
        console.log('Component mounted.')
        
    },
    computed: {
        ...mapGetters({
            allData: "example/getData"
        })
    },
    methods: {
        getData(){
            this.$store.dispatch("example/getAllData")
        },
        postData(){
            let payload = {}
            payload.name = this.inputData,
            payload.id = 4
            this.$store.dispatch("example/postData", payload)
        },
        putData(){
            let payload = {}
            payload.name = this.inputData,
            payload.id = 1
            this.$store.dispatch("example/putData", payload)
        },
        patchData(){
            let payload = {}
            payload.name = this.inputData,
            payload.id = 1
            this.$store.dispatch("example/patchData", payload)
        },
        deleteData(){
            let payload = {}
            payload.id = this.inputData,
            this.$store.dispatch("example/deleteData", payload)
        }
    }
}
</script>
