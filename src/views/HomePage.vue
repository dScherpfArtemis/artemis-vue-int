<template>
    <HelloWorld :recipe-count="recipes.length" />
    <FeaturedRecipes :recipes="recipes" />
    <RecipeForm />
</template>

<script setup>
import HelloWorld from '@/components/HelloWorld.vue';
import FeaturedRecipes from '@/components/FeaturedRecipes.vue';
import data from '@/assets/data.json';
import RecipeForm from '@/components/RecipeForm.vue';

const recipes = data.recipes;
</script>
