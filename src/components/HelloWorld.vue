<template>
    <v-container class="pa-16">
        <v-responsive class="d-flex align-center text-center fill-height">
            <h1 class="text-h2 font-weight-bold">What have I made?</h1>
            <p>{{ props.recipeCount }} recipes so far!</p>
        </v-responsive>
    </v-container>
</template>

<script setup>
const props = defineProps({
    recipeCount: {
        type: Number,
        required: true,
    },
});
</script>
