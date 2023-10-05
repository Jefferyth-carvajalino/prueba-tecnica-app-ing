<script setup>
import { computed, ref } from "vue";
</script>

<template>
	<main>    
    <RouterLink to="/">Home</RouterLink>
    <RouterView/>
	</main>
</template>

<style scoped>
  main {
    width: fit-content;
    min-width: 25vw;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a {
    padding: 4px 20px;
    border-radius: 30px;
    background-color: #fff;
    color: #030303;
  }
</style>
