<template>
    <v-container class="pa-16">
        <v-responsive class="d-flex align-center text-center fill-height">
            <v-row>
                <v-col v-for="(rec, i) in props.recipes" :key="i">
                    <RecipeCard :recipe="rec" />
                </v-col>
            </v-row>
        </v-responsive>
    </v-container>
</template>

<script setup>
import RecipeCard from './RecipeCard.vue';

const props = defineProps({
    recipes: {
        type: Array,
        required: true,
    },
});
</script>

<style lang="scss" scoped>
.v-responsive {
    overflow: visible;
}
</style>
