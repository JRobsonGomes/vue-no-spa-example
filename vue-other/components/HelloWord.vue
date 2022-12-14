<!-- Reference: https://jerickson.net/how-to-load-vue-components-non-spa-sites/ -->
<template>
    <div>Hello, {{ name }}.</div>
</template>
  
<script>
export default {
    data() {
        return {
            name: "World",
        };
    },
};
</script>
  
<style>

</style>