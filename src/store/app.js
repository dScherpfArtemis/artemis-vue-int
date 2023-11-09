// Utilities
import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
    state: () => ({
        newRecipe: {
            title: '',
            cuisine: '',
            meal: [],
            source: '',
            haveMade: '',
            rating: '',
            ingredients: [],
            steps: [],
            notes: [],
        },
        currentRecipe: {},
        recipes: [],
    }),
    actions: {
        RESET_RECIPE() {
            this.newRecipe = {
                title: '',
                cuisine: '',
                meal: [],
                source: '',
                haveMade: '',
                rating: '',
                ingredients: [],
                steps: [],
                notes: [],
            };
        },
        SAVE_RECIPE() {
            this.recipes.push(this.newRecipe);
        },
        EDIT_CURRENT_RECIPE() {
            if (this.currentRecipe) {
                let current = this.currentRecipe;
                this.newRecipe = {
                    title: current.title,
                    cuisine: current.meta.cuisine,
                    meal: current.meta.meal,
                    source: current.meta.source,
                    haveMade: current.meta.haveMade,
                    rating: current.meta.rating,
                    ingredients: current.ingredients,
                    steps: current.steps,
                    notes: current.notes,
                };
            }
        },
    },
});
