<template>

</template>

<script>
import { findCountryAPI } from "@/api/index.js"
export default {
    data() {
        return {

        }
    },
    mounted() {
        this.findCountry()
    },
    methods: {
        async findCountry() {
            let result = await findCountryAPI();
            console.log(result);
        }
    }
}
</script>

<style>
</style>