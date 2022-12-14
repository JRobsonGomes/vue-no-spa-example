<template>
    <div class="robson">
        <img alt="Vue logo" src="../assets/logo.png">
        <h1>{{ message }}</h1>
    </div>
</template>
  
<script>

export default {
    name: 'Robson',
    data() {
        return { message: "Olá Robson" }
    }
}
</script>
  
<style>
#robson {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
  