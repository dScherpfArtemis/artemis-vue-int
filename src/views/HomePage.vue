<template>
    <HelloWorld />
</template>

<script setup>
import HelloWorld from '@/components/HelloWorld.vue';
import data from '@/assets/data.json';

const recipes = data.recipes;
</script>
