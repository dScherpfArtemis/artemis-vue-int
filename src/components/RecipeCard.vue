<template>
    <v-card class="mx-auto">
        <v-card-text>
            <div>
                <span>{{ recipe.meta.meal }} - </span>
                <RatingTag class="rating-tag" :rating="recipe.meta.rating" />
            </div>
            <p class="text-h4 text--primary">
                {{ recipe.title }}
            </p>
            <div class="divider"></div>
            <div class="text--primary">
                <p>
                    <span v-for="(ing, i) in recipe.ingredients" :key="i"
                        >{{ ing.ingredient
                        }}<span v-if="i < recipe.ingredients.length - 1"
                            >,
                        </span>
                    </span>
                </p>
            </div>
        </v-card-text>
        <v-card-actions>
            <v-btn variant="text" color="teal-accent-4" @click="reveal = true">
                Preview
            </v-btn>
            <v-btn
                v-if="recipe.meta.source"
                variant="text"
                color="teal-accent-4"
                :href="recipe.meta.source"
                target="_blank"
            >
                Source
            </v-btn>
        </v-card-actions>

        <v-expand-transition>
            <v-card
                v-if="reveal"
                class="transition-fast-in-fast-out v-card--reveal"
                style="height: 100%"
            >
                <v-card-text class="pb-0 recipe-preview">
                    {{ recipe.steps[0] }}
                </v-card-text>
                <v-card-actions class="pt-0">
                    <v-btn
                        variant="text"
                        color="teal-accent-4"
                        @click="reveal = false"
                    >
                        Close
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-expand-transition>
    </v-card>
</template>

<script setup>
import { ref } from 'vue';
import RatingTag from '@/components/RatingTag.vue';

const props = defineProps({
    recipe: {
        type: Object,
        required: true,
    },
});
const reveal = ref(false);
const ingredients = () => {
    return props.recipe.ingredients.map((item) => {
        return item.ingredient;
    });
};
</script>

<style lang="scss" scoped>
.v-card {
    display: flex;
    flex-direction: column;
    height: 100%;
    text-align: left;
}
.v-card--reveal {
    bottom: 0;
    opacity: 1 !important;
    position: absolute;
    width: 100%;
}
.divider {
    width: 6rem;
    height: 1px;
    background-color: black;
    margin: 0.5rem 0 1rem;
}
.recipe-preview {
    max-height: 80%;
    overflow: hidden;
}
</style>
