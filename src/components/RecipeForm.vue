<template>
    <v-sheet width="600" class="mx-auto">
        <h2 class="pb-5">Enter a new recipe</h2>
        <v-form @submit.prevent>
            <v-window v-model="step">
                <v-window-item :value="1">
                    <h3 class="mb-5">General Info</h3>
                    <v-text-field
                        v-model="recipe.title"
                        label="Title"
                    ></v-text-field>
                    <v-text-field
                        v-model="recipe.cuisine"
                        label="Cuisine"
                    ></v-text-field>
                    <v-text-field
                        v-model="recipe.source"
                        label="Source"
                    ></v-text-field>
                    <v-container>
                        <v-row>
                            <v-col>
                                <h3>Meal</h3>
                                <v-checkbox
                                    v-for="(meal, i) in meals"
                                    :key="i"
                                    v-model="recipe.meal"
                                    :label="meal"
                                    :value="meal"
                                    hide-details
                                ></v-checkbox>
                            </v-col>
                            <v-col>
                                <h3>Rating</h3>
                                <v-radio-group>
                                    <v-radio
                                        class="py-2"
                                        v-for="(rating, i) in ratings"
                                        :label="rating"
                                        :value="i"
                                        :key="i"
                                    ></v-radio>
                                </v-radio-group>
                            </v-col>
                        </v-row>
                    </v-container>

                    <v-checkbox
                        label="I've made this"
                        v-model="recipe.haveMade"
                    ></v-checkbox>
                </v-window-item>
                <v-window-item :value="2">
                    <h3 class="mb-5">Add Ingredients</h3>
                    <v-container>
                        <v-row>
                            <v-col cols="12" md="5">
                                <v-text-field
                                    label="Amount"
                                    type="number"
                                    variant="underlined"
                                    v-model="ingredient.amount"
                                ></v-text-field>
                                <v-select
                                    label="Measurement type"
                                    :items="measurements"
                                    variant="underlined"
                                    item-title="name"
                                    item-value="abbr"
                                    v-model="ingredient.measurement"
                                ></v-select>
                            </v-col>
                            <v-col cols="12" md="7">
                                <v-text-field
                                    :append-icon="'mdi-plus'"
                                    label="Ingredient"
                                    v-model="ingredient.name"
                                    @click:append="addIngredient()"
                                    variant="underlined"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-list>
                                    <v-list-item
                                        v-for="(ing, i) in recipe.ingredients"
                                        :key="i"
                                    >
                                        <template v-slot:prepend>
                                            <v-btn
                                                icon="mdi-minus"
                                                size="x-small"
                                                class="mr-3"
                                                @click="removeIngredient(i)"
                                            ></v-btn>
                                        </template>
                                        <v-list-item-title>
                                            {{ ing.amount }}
                                            {{ ing.measurement }}
                                            {{ ing.name }}
                                        </v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-window-item>
                <v-window-item :value="3">
                    <h3 class="mb-5">Add Steps</h3></v-window-item
                >
                <v-window-item :value="4">
                    <h3 class="mb-5">Add Notes</h3></v-window-item
                >
            </v-window>
            <v-spacer></v-spacer>
            <div class="form-controls d-flex flex-row justify-space-between">
                <v-btn v-if="step > 1" variant="text" @click="step--">
                    Back
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                    v-if="step < 4"
                    color="primary"
                    variant="flat"
                    @click="step++"
                >
                    Next
                </v-btn>
            </div>
            <v-btn v-if="step === 4" type="submit" block class="mt-2"
                >Submit</v-btn
            >
        </v-form>
    </v-sheet>
</template>

<script setup>
import { ref } from 'vue';

const step = ref(1);
const recipe = ref({
    title: '',
    cuisine: '',
    meal: [],
    source: '',
    haveMade: '',
    rating: '',
    ingredients: [],
    steps: [],
    notes: [],
});
const meals = ['breakfast', 'brunch', 'lunch', 'snack', 'dinner', 'dessert'];
const ratings = [
    "Won't make again",
    'Needs some work',
    'Make it again',
    'All time favorite',
];

// ingredient list
const ingredient = ref({
    name: '',
    amount: '',
    measurement: '',
});

const measurements = [
    { name: 'none', abbr: '' },
    { name: 'tablespoon', abbr: 'tbsp' },
    { name: 'teaspoon', abbr: 'tsp' },
    { name: 'ounce', abbr: 'oz' },
    { name: 'fluid ounce', abbr: 'fl. oz' },
    { name: 'cup', abbr: 'c' },
    { name: 'quart', abbr: 'qt' },
    { name: 'pint', abbr: 'pt' },
    { name: 'gallon', abbr: 'gal' },
    { name: 'pound', abbr: 'lb' },
    { name: 'milliliter', abbr: 'mL' },
    { name: 'grams', abbr: 'g' },
    { name: 'kilograms', abbr: 'kg' },
    { name: 'liter', abbr: 'l' },
    { name: 'units', abbr: 'units' },
];

const addIngredient = () => {
    recipe.value.ingredients.push(ingredient.value);
    ingredient.value = {
        name: '',
        amount: '',
        measurement: '',
    };
    return;
};
const removeIngredient = (index) => {
    return recipe.value.ingredients.splice(index, 1);
};
</script>

<style lang="scss" scoped></style>
