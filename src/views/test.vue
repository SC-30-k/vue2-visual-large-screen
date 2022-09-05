<template>

</template>

<script>
import { findCountryAPI,findProvinceAPI } from "@/api/index.js"
export default {
    data() {
        return {
            province:"广东省"
        }
    },
    mounted() {
        this.findProvince(this.province)
    },
    methods: {
        async findProvince(name) {
            let result = await findProvinceAPI(name);
            console.log(result);
        }
    }
}
</script>

<style>
</style>