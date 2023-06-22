<template>
    <HelloWorld :recipe-count="recipes.length" />
    <FeaturedRecipes :recipes="recipes" />
</template>

<script setup>
import HelloWorld from '@/components/HelloWorld.vue';
import FeaturedRecipes from '@/components/FeaturedRecipes.vue';
import data from '@/assets/data.json';

const recipes = data.recipes;
</script>
