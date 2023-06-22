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
    },
});
