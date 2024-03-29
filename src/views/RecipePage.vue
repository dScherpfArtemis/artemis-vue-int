<template>
    <div>
        <v-container v-if="recipe" class="pa-16">
            <v-responsive class="d-flex align-center fill-height">
                <v-sheet class="recipe">
                    <div class="title-row">
                        <h1 class="font-weight-bold">{{ recipe.title }}</h1>
                        <v-icon
                            icon="mdi-checkbox-marked-circle"
                            color="primary"
                            title="I've made this"
                        ></v-icon>
                        <v-spacer />
                        <DialogFrame
                            v-slot="slotProps"
                            button-text="Edit recipe"
                            button-icon="mdi-playlist-edit"
                        >
                            <RecipeForm
                                :dialog-status="slotProps.dialogStatus"
                                title="Edit Recipe"
                                mode="edit"
                            />
                        </DialogFrame>
                    </div>
                    <div class="title-row mb-5">
                        <span class="text-caption">
                            <a :href="recipe.meta.source">{{
                                recipe.meta.source
                            }}</a>
                        </span>
                    </div>
                    <div class="title-row">
                        <div class="tags">
                            <v-chip v-if="recipe.meta.cuisine" label>{{
                                recipe.meta.cuisine
                            }}</v-chip>
                            <v-chip
                                label
                                v-for="(meal, i) in recipe.meta.meal"
                                :key="i"
                                >{{ meal }}</v-chip
                            >
                            <v-chip label>
                                <RatingTag :rating="recipe.meta.rating" />
                            </v-chip>
                        </div>
                    </div>

                    <v-divider class="my-5"></v-divider>
                    <div class="recipe-body">
                        <div class="ingredients">
                            <h2>Ingredients</h2>
                            <v-list class="ingredients" lines="one">
                                <v-list-item
                                    class="ingredient"
                                    v-for="(ing, i) in recipe.ingredients"
                                    :key="i"
                                >
                                    <v-list-title>
                                        <span v-if="ing.amount"
                                            >{{ ing.amount }}
                                        </span>
                                        <span v-if="ing.measurement"
                                            >&nbsp;{{ ing.measurement }}
                                        </span>
                                        <span v-if="ing.amount"> - </span>
                                        <span>{{ ing.name }}</span>
                                    </v-list-title>
                                </v-list-item>
                            </v-list>
                        </div>
                        <div class="recipe-content">
                            <v-card class="recipe-steps" variant="tonal">
                                <v-card-title>
                                    <h2>Instructions</h2>
                                </v-card-title>
                                <v-list class="ingredients" lines="two">
                                    <v-list-item
                                        class="ingredient"
                                        v-for="(step, i) in recipe.steps"
                                        :key="i"
                                        :title="'Step' + ' ' + (i + 1)"
                                        :subtitle="step"
                                    ></v-list-item>
                                </v-list>
                            </v-card>
                            <v-card
                                v-if="recipe.notes.length"
                                class="recipe-notes"
                                variant="tonal"
                            >
                                <v-card-title>
                                    <h2>Notes</h2>
                                </v-card-title>
                                <v-list class="ingredients" lines="two">
                                    <v-list-item
                                        class="ingredient"
                                        v-for="(note, i) in recipe.notes"
                                        :key="i"
                                    >
                                        <div v-html="note"></div>
                                    </v-list-item>
                                </v-list>
                            </v-card>
                        </div>
                    </div>
                </v-sheet>
            </v-responsive>
        </v-container>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useAppStore } from '@/store/app.js';
import data from '@/assets/data.json';
import RatingTag from '@/components/RatingTag.vue';
import DialogFrame from '@/components/dialogs/DialogFrame.vue';
import RecipeForm from '@/components/RecipeForm.vue';

const appStore = useAppStore();

const route = useRoute();
const recipes = data.recipes;

console.log('Route', route);

const recipe = recipes.find((rec) => {
    let cleanTitle = rec.title.replace(/ /g, '-').toLowerCase();

    return cleanTitle === route.params.title.toLowerCase();
});

onMounted(() => {
    appStore.currentRecipe = recipe;
});
</script>

<style lang="scss">
.title-row {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
}
.tags {
    display: flex;
    flex-direction: row;
    gap: 10px;
}
.recipe-body {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
    .ingredients {
        // flex: 1 1 0px;
        flex-shrink: 0;
    }
    .recipe-content {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        // flex: 1 1 0px;
        margin: 10px;
    }
    .v-card {
        padding: 1.5rem 1rem;
    }
    .v-list-item-subtitle {
        color: #000;
        opacity: 1;
    }
    p {
        padding-bottom: 1rem;
        font-size: 0.875rem;
        line-height: 1rem;
    }
}
</style>
